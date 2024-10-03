"use client";

// -- REACT
import { FC, useState } from "react";
// -- STYLE
import "./menu-section.scss";
// -- TYPE
import { foodSelection } from "./menu-section";
import { menuItemType } from "@/app/lib/definitions";
// -- COMPONENTS
import { MenuCard } from "../../components/menuCard";
import { HeadSection } from "../../components/HeadSection";
// -- DATA
import { menu } from "@/app/lib/placeholder-data";

export const MenuSection: FC = (): JSX.Element => {
  // # STATE TO HANDLE FOOD LIST TO DISPLAY
  const [foodSelection, setFoodSelection] =
    useState<foodSelection>("breakfast");
  // # SELECT FOOD LIST TO DISPLAY
  const selectFoodList = (foodList: foodSelection) => (): void => {
    setFoodSelection(foodList);
  };
  // # DISPLAY MENU
  function displayMenu(): JSX.Element[] {
    return menu.map((item: menuItemType, index: number) => {
      return (
        <div className="menuCardContainer wow fadeIn" key={index}>
          <MenuCard
            description={item.description}
            image={item.image}
            price={item.price}
            title={item.name}
          />
        </div>
      );
    });
  }

  return (
    <div id="menuSection">
      {/* HEAD SECTION */}
      <HeadSection headText="Food Menu" title="Most Popular Items"/>
      {/* SELECT MENU LIST */}
      <div className="foodTypeSelectionContainer wow fadeInUp">
        <div className="foodTypeSelection">
          <div
            className={`selection breackfast ${
              foodSelection === "breakfast" ? "activeMenu" : ""
            }`}
            onClick={selectFoodList("breakfast")}
          >
            <i className="fa-solid fa-mug-saucer"></i>
            <span>
              Popular <br />
              <span className="bold">Breakfast</span>
            </span>
          </div>
          <div
            className={`selection launch ${
              foodSelection === "launch" ? "activeMenu" : ""
            }`}
            onClick={selectFoodList("launch")}
          >
            <i className="fa-solid fa-burger"></i>
            <span>
              Special <br />
              <span className="bold">launch</span>
            </span>
          </div>
          <div
            className={`selection dinner ${
              foodSelection === "dinner" ? "activeMenu" : ""
            }`}
            onClick={selectFoodList("dinner")}
          >
            <i className="fa-solid fa-utensils"></i>
            <span>
              Lovely <br />
              <span className="bold">Dinner</span>
            </span>
          </div>
        </div>
      </div>
      {/* DISPLAY MENU SELECTED */}
      <div className="menu wow fadeInUp" key={foodSelection}>
        {foodSelection === "breakfast"
          ? displayMenu()
          : foodSelection === "dinner"
          ? displayMenu()
          : displayMenu()}
      </div>
    </div>
  );
};
