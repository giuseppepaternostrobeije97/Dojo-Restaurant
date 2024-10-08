import { NextResponse } from "next/server";
// # TYPE
import { menuItem } from "@/app/pages/other/other";

//  GET INITIAL LIST OF RESTAURANT
export async function GET() {
  const response = await fetch(
    "https://private-anon-2e40ed541b-pizzaapp.apiary-mock.com/restaurants/"
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch restaurants" },
      { status: 500 }
    );
  }

  const restaurants = await response.json();
  return NextResponse.json(restaurants);
}

// # FETCH MENU BASED ON ID
export const fetchMenu = async (restaurantId: number) => {
  try {
    const response = await fetch(
      `https://private-anon-27551baeba-pizzaapp.apiary-mock.com/restaurants/${restaurantId}/menu`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch menu");
    }
    const menu = await response.json();
    console.log("Menu:", menu);
    return menu;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

//  # SEND NEW ORDER

export const submitOrder = async (
  menuItems: menuItem[],
  restaurantId: number
) => {
  const orderData = {
    cart: menuItems.map((item) => ({
      menuItemId: item.id,
      quantity: item.quantity,
    })),
    restaurantId,
  };

  const response = await fetch(
    "https://private-anon-6ba56f7fdf-pizzaapp.apiary-mock.com/orders/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }
  );

  if (!response.ok) {
    console.error("Failed to submit order");
    return null;
  }

  const data = await response.json();
  console.log("Order submitted successfully:", data);
  // Potresti voler resettare il carrello qui
  return data
};

// # GET ORDER DETAIL
export const GETOrderDetail = async (orderId: string) => {
    try {
      const response = await fetch(
        `https://private-anon-6ba56f7fdf-pizzaapp.apiary-mock.com/orders/${orderId}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }
      const orderResume = await response.json();
      console.log("Menu:", orderResume);
      return orderResume;
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };