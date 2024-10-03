// -- REACT
import { FC } from "react";
// -- STYLE
import "./head-section.scss";
// -- TYPE
import { headSectionProps } from "./head-section";

export const HeadSection: FC<headSectionProps> = (props): JSX.Element => {
  return (
    <div id="headSection">
      <div className="headText">
        <div className="line"></div>
        <span>{props.headText}</span>
        <div className="line"></div>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};


