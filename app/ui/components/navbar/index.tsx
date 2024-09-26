"use client";

// -- REACT
import { FC, useState, useEffect } from "react";
// -- NEXT
import Link from "next/link";
import { usePathname } from "next/navigation";
// -- STYLE
import "./navbar.scss";
// -- TYPE
import { navbarItem } from "@/app/lib/definitions";
// -- CONSTANT
import { websiteName, navbarItems, sideNav } from "@/app/lib/placeholder-data";
// -- COMPONENTS
import { Button } from "../Button";


export const Navbar: FC = () => {
  // # STATE
  const [scroll, setScroll] = useState<boolean>(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);
  // # GET PATHNAME
  const pathname:string = usePathname().replace(/^\//, "");
  console.log(pathname)
  // # NAVBAR ITEM
  function displayNavbar(): JSX.Element[] {
    return navbarItems.map((item: navbarItem, index: number) => {
      return (
        <li key={index} className={`navItem ${item.label} ${pathname === item.link ? 'activeLink' : ''}`}>
          {item.label === "pages" ? (
            <div className="pagesItemContainer">
              <span className="naviItemLink">{item.label}</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          ) : (
            <Link href={`/${item.link}`} className="naviItemLink">
              {item.label}
            </Link>
          )}
          {item.label.toLowerCase() === "pages" && (
            <ul className="sideMenu">
              {sideNav.map((sideNavItem: navbarItem, index: number) => {
                return (
                  <li key={index}>
                    <Link href={`/${sideNavItem.link}`}>
                      {sideNavItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    });
  }
  // # SCROLL EFFECT HANDLER EVENT
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // # SCROLL EFFECT STATE HANDLER
  function handleScroll(): void {
    let windowScroll: number = window.scrollY;
    let scrolly: boolean = false;
    if (windowScroll > 110) {
      scrolly = true;
    }
    setScroll(scrolly);
  }
  // # HANLDLE MOBILE MENU
  function toggleMenu(): void {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  }

  return (
    <nav className={`navbar ${scroll && "navbarBg"}`} id="navbar">
      <div className="navbarContainer">
        {/* LEFT SIDE */}
        <div className="logoContainer">
          <i className="fa-solid fa-utensils"></i>
          <h2 className="textLogo">{websiteName}</h2>
        </div>
        {/* RIGHT SIDE */}
        <div className="navbarItemsContainer">
          <ul className="navbarItems">{displayNavbar()}</ul>
          <Button ariaLabel="book a table" labelBtn="book a table" />
        </div>
        {/* MOBILE RIGHT SIDE */}
        <div className="navbarContainerMobile">
          <i
            className={`fa-solid fa-${hamburgerMenuOpen ? "x" : "bars"}`}
            onClick={toggleMenu}
          ></i>
        </div>
        {/* DROP DOWN MENU */}
        <div className={`dropDownMenu ${hamburgerMenuOpen && "openDropDown"}`}>
          {displayNavbar()}
          <Button ariaLabel="book a table" labelBtn="book a table" customClass="mobileBtn"/>
        </div>
      </div>
    </nav>
  );
};
