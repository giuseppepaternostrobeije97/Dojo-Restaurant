// -- REACT
import { FC } from "react";
// -- STYLE
import "./chef-section.scss";
// -- COMPONENTS
import { ChefCard } from "../../components/ChefCard";
// -- DATA
import { chefList,timeDelay } from "@/app/lib/placeholder-data";

export const ChefSection: FC = (): JSX.Element => {
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
            social1={chef.facebookLink}
            social2={chef.twitterLink}
            social3={chef.instagramLink}
          />
        </div>
      );
    });
  }

  return <div id="chefSection">{displayChefList()}</div>;
};
