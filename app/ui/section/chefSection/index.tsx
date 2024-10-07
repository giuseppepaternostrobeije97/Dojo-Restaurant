// -- REACT
import { FC } from "react";
// -- STYLE
import "./chef-section.scss";
// -- COMPONENTS
import { ChefCard } from "../../components/ChefCard";
import { HeadSection } from "../../components/HeadSection";
// -- TYPE
import { chefSectionProp } from "./chef-section";

// # SIMULATE FETCH
async function fetchChefData() {

  // # DYNAMIC IMPORT
  const { chefList, timeDelay } = await import("@/app/lib/placeholder-data");

  return { chefList, timeDelay };
}

export const ChefSection: FC<chefSectionProp> = async (props): Promise<JSX.Element> => {
  // # GET DATA
  const { chefList, timeDelay } = await fetchChefData();

  // # DISPLAY CHEF LIST
  function displayChefList(): JSX.Element[] {
    return chefList.map((chef, index) => {
      return (
        <div
          className="chefCardContainer wow fadeInUp"
          data-wow-delay={timeDelay[index]}
          key={index} 
        >
          <ChefCard
            name={chef.name}
            surname={chef.surname} 
            role={chef.role}
            profilePic={chef.profilePic}
            social={chef.social}
          />
        </div>
      );
    });
  }

  return (
    <div id="chefSection">
      <HeadSection headText="Team Members" title="Our Master Chef" />
      {displayChefList()}
      {props.dublicateChefList && displayChefList()}
    </div>
  );
};
