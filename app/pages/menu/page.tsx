// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../../ui/components/Hero";
// -- SECTIONS
import { MenuSection } from "../../ui/section/menuSection";

const Menu: FC = () => {
  return <div>
    <Hero title="Food Menu" />
    <MenuSection />
  </div>;
};

export default Menu;