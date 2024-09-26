// -- REACT
import { FC } from "react";
// -- STYLE
import "./hero.scss";
// -- TYPE
import { heroProps } from "./hero";
// -- ASSETS
import BG from "../../../../public/assets/bg-hero.jpg";

export const Hero: FC<heroProps> = (props): JSX.Element => {
  // # SET BG IMAGE
  const backgroundImage: string =
    typeof props.backgroundImage === "string"
      ? props.backgroundImage
      : props.backgroundImage && "src" in props.backgroundImage
      ? props.backgroundImage.src
      : BG.src;


  return (
    <div id="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="heroContainer">
        {props.homeHero ? (
          <></>
        ) : (
          <div className="basicHero">
            <h1 className="heroTitle">{props.title}</h1>
            {<span className="displayPath">{props.displayPath}</span>}
          </div>
        )}
      </div>
      <div className="layer"></div>
    </div>
  );
};
