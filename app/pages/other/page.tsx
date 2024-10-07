// 'use client'

// -- REACT
import { FC } from "react";
// -- STYLE
import "./other.scss";
// -- COMPONENTS
import { Hero } from "@/app/ui/components/Hero";
import { HeadSection } from "@/app/ui/components/HeadSection";
import { MenuApi } from "@/app/ui/components/MenuApi";
// -- TYPE
interface Restaurant {
  id: number;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
}

const Other: FC = async (): Promise<JSX.Element> => {
  // # GET RESTAURANT FROM API
  const response = await fetch(
    "https://private-anon-2e40ed541b-pizzaapp.apiary-mock.com/restaurants/"
  );

  // # CHECK ERROR
  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }
  // # ASSIGN RESTAURANTS TO VARIABLE
  const restaurants: Restaurant[] = await response.json();


  return (
    <div id="other">
      <Hero title="Other from us" />
      <HeadSection headText="Other from us" title="Other Restaurant" />
      {/* Mostra la lista dei ristoranti */}
      <div className="restaurant-list">
        <h2>Available Restaurants</h2>
        <MenuApi restaurants={restaurants}/>
      </div>
    </div>
  );
};

export default Other;
