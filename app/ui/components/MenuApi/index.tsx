"use client";
// -- REACT
import { FC, useState } from "react";
// -- TYPE
interface Restaurant {
  id: number;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
}
type menuItem = {
  id: number;
  category: string;
  name: string;
  topping: string[];
  price: number;
  rank: number;
};
type menuApiProps = {
  restaurants: Restaurant[];
};
// Components
import Map from "../Map";

export const MenuApi: FC<menuApiProps> = (props) => {
  const [menu, setMenu] = useState<null | menuItem[]>(null);
  const [restaurantId,setRestaurantID] = useState<number>(0)
  const showMenuList = (id: number) => async () => {
    setMenu(null)
    const response = await fetch(
      `https://private-anon-27551baeba-pizzaapp.apiary-mock.com/restaurants/${id}/menu`
    );
    // # CHECK ERROR
    if (!response.ok) {
      return console.log("Failed to fetch restaurants");
    }
    
    const menu: menuItem[] = await response.json();
    setMenu(menu)
  };

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
              return <li key={index}>
                <h3>{item.name}</h3>
                <h5>{item.category}</h5>
                <h6>{item.price}€</h6>
              </li>;
            })}
        </ul>
      </div>
    </div>
  );
};
