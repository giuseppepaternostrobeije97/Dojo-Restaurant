// -- REACT
import { FC } from "react";
// -- TYPE
import { serviceCardProps } from "./service-card";
// -- STYLE
import './service-card.scss'


export const ServiceCard:FC<serviceCardProps> = (props):JSX.Element => {
    return(
        <div id="serviceCard" className={`${props.customClass}`} >
            <i className={`serviceIcon fa-solid fa-${props.icon}`}></i>
            <h6 className="serviceTitle">{props.title}</h6>
            <p className="serviceDescription">{props.description}</p>
        </div>
    )
}