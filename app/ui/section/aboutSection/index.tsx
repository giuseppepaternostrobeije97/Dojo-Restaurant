// -- REACT
import { FC } from "react";
// -- STYLE
import "./about-section.scss";
// -- DATA
import {
  aboutGallery,
  timeDelay,
  websiteName,
} from "@/app/lib/placeholder-data";
// -- NEXT
import Image from "next/image";
// -- COMPONENTS
import { Button } from "../../components/Button";

export const AboutSection: FC = (): JSX.Element => {
  // #  FUNCTION TO DISPLAY THE GALLERY
  function displayGallery(): JSX.Element[] {
    return aboutGallery.map((img, index) => {
      return (
        <div
          className="imgContainer wow zoomIn"
          key={index}
          data-wow-delay={timeDelay[index]}
        >
          <Image src={img} alt="about-image" className={`aboutImg`} />
        </div>
      );
    });
  }

  return (
    <div id="aboutSection">
      <div className="aboutGallery">{displayGallery()}</div>
      <div className="aboutPresentation">
        <div className="paragTitle">
          <h4>About Us</h4>
          <div className="line"></div>
        </div>
        <h3>
          Welcome to
          <i className="fa-solid fa-utensils"></i> {websiteName}
        </h3>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          <br /><br />
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore
        </p>
        <div className="presentData">
            <div className="experienceData">
                <div className="number"><span>15</span></div>
                <div className="text">
                    Yers of <br /><span>experience</span>
                </div>
            </div>
            <div className="masterChefData">
                <div className="number"><span>50</span></div>
                <div className="text">
                    Popular <br /> <span>master chef</span>
                </div>
            </div>
        </div>
        <Button labelBtn="read more" ariaLabel="read more btn"/>
      </div>
    </div>
  );
};
