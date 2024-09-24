// -- REACT
import { FC } from "react";
// -- NEXT
import Link from "next/link";
// -- STYLE
import "./navbar.scss";
// -- CONSTANT
import { websiteName, navbarItems } from "@/app/lib/placeholder-data";
// -- COMPONENTS
import { Button } from "../Button";

export const Navbar: FC = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbarContainer">
        {/* LEFT SIDE */}
        <div className="logoContainer">
          <i className="fa-solid fa-utensils"></i>
          <h2 className="textLogo">{websiteName}</h2>
        </div>
        {/* RIGHT SIDE */}
        <div className="navbarItemsContainer">
          <ul className="navbarItems">
            {navbarItems.map((item, index) => {
              return (
                <li key={index} className="navItem">
                  <Link href={`/${item.link}`}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
          <Button
          ariaLabel="book a table"
          labelBtn="book a table"
          />
        </div>
      </div>
    </nav>
  );
};
