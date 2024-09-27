// -- REACT
import { FC } from "react";
// -- STYLE
import "./chef-section.scss";
// -- COMPONENTS
import { ChefCard } from "../../components/ChefCard";
// -- DATA
import { chefList, timeDelay } from "@/app/lib/placeholder-data";
// -- TYPE
import { chefSectionProp } from "./chef-section";

export const ChefSection: FC<chefSectionProp> = (props): JSX.Element => {
  // # DISPLAY CHEF
  function displayChefList(): JSX.Element[] {
    return chefList.map((chef, index) => {
      return (
        <div
          className="chefCardContainer wow fadeInUp"
          data-wow-delay={timeDelay[index]}
        >
          <ChefCard
            name={chef.name}
            surname={chef.surame}
            role={chef.role}
            profilePic={chef.profilePic}
            key={index}
            social={chef.social}
          />
        </div>
      );
    });
  }

  return (
    <div id="chefSection">
      <div className="headSection">
        <div className="headText">
          <div className="line"></div>
          <span>Team Members</span>
          <div className="line"></div>
        </div>
        <h3>Our Master Chefs</h3>
      </div>
      {displayChefList()}
      {props.dublicateChefList && displayChefList()}
    </div>
  );
};
