// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../ui/components/Hero";
// -- SECTIONS
import { ChefSection } from "../ui/section/chefSection";

const Team: FC = () => {
  return <div>
    <Hero title="Our Team" />
    <ChefSection dublicateChefList/>
  </div>;
};

export default Team;