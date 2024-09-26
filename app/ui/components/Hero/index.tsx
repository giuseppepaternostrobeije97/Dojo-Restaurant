// -- REACT
import { FC } from "react";
// -- STYLE
import "./hero.scss";
// -- TYPE
import { heroProps } from "./hero";
// -- ASSETS
import BG from "../../../../public/assets/bg-hero.jpg";
import HeroImage from "../../../../public/assets/hero.png"
// -- COMPONENTS
import { Button } from "../Button";
// -- NEXT
import Image from "next/image";

export const Hero: FC<heroProps> = (props): JSX.Element => {
  // # SET BG IMAGE
  const backgroundImage: string =
    typeof props.backgroundImage === "string"
      ? props.backgroundImage
      : props.backgroundImage && "src" in props.backgroundImage
      ? props.backgroundImage.src
      : BG.src;

  const heroHomeImg:string = HeroImage.src;

  return (
    <div id="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="heroContainer">
        {props.homeHero ? (
          <div className="homeHero">
            <div className="description">
              <h1>
                Enjoy Our <br /> Delicious Meal
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="btnContainer">
                <Button ariaLabel="Book a table" labelBtn="book a table" />
              </div>
            </div>
            <div className="heroImageContainer">
              <Image
                aria-hidden
                src={HeroImage}
                alt="meet plate"
                className="heroImage"
              />
            </div>
          </div>
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
