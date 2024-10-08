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
import { Restaurant } from "./other";

const Other: FC = async (): Promise<JSX.Element> => {
  // # GET RESTAURANTS FROM API
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/restaurants`);

  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  const restaurants: Restaurant[] = await response.json();

  return (
    <div id="other">
      <Hero title="Other from us" />
      <HeadSection headText="Other from us" title="Other Restaurant" />
      {/* Mostra la lista dei ristoranti */}
      <div className="restaurant-list">
        <h2>Available Restaurants</h2>
        <MenuApi restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Other;