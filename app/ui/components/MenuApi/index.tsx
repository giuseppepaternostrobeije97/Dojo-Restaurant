"use client";
// -- REACT
import React, { FC, useState } from "react";
// -- TYPE
import { menuItem, menuApiProps, orderResume } from "@/app/pages/other/other";
// Components
import Map from "../Map";
import { Button } from "../Button";
import { InputText } from "../Input/Index";
// # SERVICES
import {
  fetchMenu,
  submitOrder,
  GETOrderDetail,
} from "@/app/api/restaurants/route";

export const MenuApi: FC<menuApiProps> = (props) => {
  // # STATE
  const [menu, setMenu] = useState<null | menuItem[]>(null);
  const [restaurantId, setRestaurantID] = useState<number>(0);
  const [menuItems, setmenuItems] = useState<menuItem[]>([]);
  const [orderResume, setOrderResume] = useState<orderResume | null>(null);
  const [inputInfo, setInfoInput] = useState<string>("");
  // # SHOW MENU LIST
  const showMenuList = (id: number) => async () => {
    setRestaurantID(id);
    setMenu(null);
    setmenuItems([]);

    const menu: menuItem[] = await fetchMenu(id);
    setMenu(menu);
  };
  // # ADD ITEM TU ORDER
  const addToOrder = (menuItem: menuItem) => () => {
    // Crea una copia dell'array menuItems
    const order = [...menuItems];

    // Trova l'oggetto che ha lo stesso id di menuItem
    const itemToAdd = order.find((item) => item.id === menuItem.id);

    // Se l'oggetto è già nell'ordine, incrementa la sua quantità
    if (itemToAdd) {
      itemToAdd.quantity = (itemToAdd.quantity || 1) + 1; // Se `quantity` non esiste, impostalo a 1, altrimenti incrementa
    } else {
      // Aggiungi l'oggetto all'ordine con quantità iniziale impostata a 1
      order.push({ ...menuItem, quantity: 1 });
    }

    // Aggiorna lo stato con il nuovo array
    setmenuItems(order);
  };
  // # REMOVE ITEM FROM ORDER
  const removeFromOrder = (menuItem: menuItem) => () => {
    // Crea una copia dell'array menuItems
    const order = [...menuItems];

    // Trova l'oggetto che ha lo stesso id di menuItem
    const itemToRemove = order.find((item) => item.id === menuItem.id);

    // Se l'oggetto è trovato
    if (itemToRemove) {
      // Se la quantità è maggiore di 1, decrementa
      if (itemToRemove.quantity && itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
      } else {
        // Se la quantità è 1 o non esiste, rimuovi l'oggetto dall'array
        const updatedOrder = order.filter((item) => item.id !== menuItem.id);
        setmenuItems(updatedOrder);
        return;
      }
    }

    // Aggiorna lo stato con il nuovo array
    setmenuItems(order);
  };
  // # SEND ORDER
  const sendOrder = async () => {
    const response = await submitOrder(menuItems, restaurantId);
    setOrderResume(response);
    setMenu(null);
    setRestaurantID(0);
    setmenuItems([]);
  };
  // # SHOW DATE
  const showDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  };
  // # CHANGE INPUT
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoInput(e.target.value);
  };
  // # GET ORDER RESUME
  const getOrderResume =  async () =>  {
    const orderResume = await GETOrderDetail(inputInfo)
    setOrderResume(orderResume)
    setInfoInput('')
  }

  return (
    <div id="menuAPi" className="mainContainer">
      <ul className="restaurants-container">
        {props.restaurants.map((restaurant) => (
          <li key={restaurant.id} onClick={showMenuList(restaurant.id)}>
            <div className="infoContainer">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address1}</p>
            </div>
            <Map lat={restaurant.latitude} lng={restaurant.longitude} />
          </li>
        ))}
      </ul>
      <div className="menuContainer">
        <h2>Menu</h2>
        <ul className="menuItem">
          {menu &&
            menu.map((item, index) => {
              return (
                <li key={index} onClick={addToOrder(item)}>
                  <h3>{item.name}</h3>
                  <h5>{item.category}</h5>
                  <h6>{item.price}€</h6>
                </li>
              );
            })}
        </ul>
      </div>
      {menu && (
        <div className="orderContainer">
          <h3 className="font-bold">Your order</h3>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <li className="w-1/3">{item.name}</li>
                  <span className="w-1/3 text-center">
                    {item.quantity ? item.quantity : 1}
                  </span>
                  <span
                    onClick={removeFromOrder(item)}
                    className="cursor-pointer font-bold text-red-700 w-1/3 text-end"
                  >
                    remove one
                  </span>
                </div>
              );
            })}
          </ul>
          <Button
            onClick={sendOrder}
            labelBtn="send order"
            disabledBtn={menuItems.length < 1}
          />
        </div>
      )}
      {orderResume && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden">
            {/* Header modale */}
            <div className="bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-center text-orange-600">
                Order Resume
              </h2>
              <button
                onClick={() => setOrderResume(null)}
                className="text-white hover:text-orange-400"
              >
                &times;
              </button>
            </div>

            <div className="relative w-full h-full gap-4 py-10 flex flex-col justify-center items-center">
              <h3>
                <span className="font-bold">Status: </span> {orderResume.status}
              </h3>
              <h4>
                <span className="font-bold">Id: </span>
                {orderResume.orderId}
              </h4>
              <h5>
                <span className="font-bold">Ordered at: </span>
                {showDate(orderResume.orderedAt)}
              </h5>
              <h3>
                <span className="font-bold">Estimate delivery: </span>{" "}
                {showDate(orderResume.esitmatedDelivery)}
              </h3>
              <h6>
                <span className="font-bold">Total amount: </span>
                {orderResume.totalPrice}€
              </h6>
            </div>
          </div>
        </div>
      )}
      <div className="checkOrderId my-40 text-center w-full bg-[#0f172b] py-28 px-20 flex flex-col gap-10 items-center">
        <h2 className="text-white">Check order With ID</h2>
        <InputText
          name="inputText"
          type="text"
          placeholder="12243..."
          onChange={changeInput}
          value={inputInfo}
        />
        <div>
          <Button labelBtn="get info" onClick={getOrderResume}/>
        </div>
      </div>
    </div>
  );
};
