// -- REACT
import { FC } from "react";
// -- STYLE
import './menu-card.scss';
// -- TYPE
import { menuCard } from "./menu-card";
// -- NEXT
import Image from "next/image";

export const MenuCard:FC<menuCard> = ({description,image,price,title}):JSX.Element => {
    return(
        <div id="menuCard">
            <div className="imageContainer">
                <Image src={image} alt="cover food menu image"/>
            </div>
            <div className="description">
                <div className="nameAndPrice">
                    <h4 className="name">{title}</h4>
                    <span className="price">${price}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}