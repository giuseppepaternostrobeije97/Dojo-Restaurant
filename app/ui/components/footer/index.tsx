// -- REACT
import { FC } from "react";
// PLACEHOLDER DATA
import {
  footerLink,
  socialLink,
  telephone,
  address,
  email,
} from "@/app/lib/placeholder-data";
// -- TYPE
import { navbarItem, social } from "@/app/lib/definitions";
// -- NEXT
import Link from "next/link";
// -- STYLE
import "./footer.scss";

export const Footer: FC = () => {
  // # RENDER FOOTER NAV
  function displayFooterNav(): JSX.Element[] {
    return footerLink.map((footerItem: navbarItem, index: number) => {
      return (
        <li key={index} className="footerNavItem">
          <i className="fa-solid fa-chevron-right"></i>
          <Link href={`/${footerItem.link}`}>{footerItem.label}</Link>
        </li>
      );
    });
  }
  // # RENDER SOCIAL FOOTER CARD
  function displayFooterSocialCards(): JSX.Element[] {
    return socialLink.map((socialLink: social, index: number) => {
      return (
        <div className="socialCard" key={index}>
          <i className={`fa-brands fa-${socialLink.social}`}></i>
        </div>
      );
    });
  }
  return (
    <footer id="footer">
      <div className="footerContainer">
        {/* COMPANY COLUMN */}
        <div className="section company">
          <div className="sectionTitle">
            <h3>Company</h3>
            <div className="line"></div>
          </div>
          <ul className="footerNavContainer">{displayFooterNav()}</ul>
        </div>
        {/* CONTACT COLUMN */}
        <div className="section contact">
          <div className="sectionTitle">
            <h3>Contact</h3>
            <div className="line"></div>
          </div>
          <div className="contactInfo">
            <div className="info address">
              <i className="fa-solid fa-location-dot"></i>
              <span>{address}</span>
            </div>
            <div className="info telephone">
              <i className="fa-solid fa-phone"></i>
              <span>{telephone}</span>
            </div>
            <div className="info email">
              <i className="fa-solid fa-envelope"></i>
              <span>{email}</span>
            </div>
          </div>
          <div className="socialCardsContainer">
            {displayFooterSocialCards()}
          </div>
        </div>
        {/* OPENING COLUMN */}
        <div className="section opening">
          <div className="sectionTitle">
            <h3>Opening</h3>
            <div className="line"></div>
          </div>
          <div className="openHours">
            <div className="time week">
              <span className="days">Monday - Saturday</span>
              <span className="hours">09AM - 09PM</span>
            </div>
            <div className="time week-end">
              <span className="days">Sunday</span>
              <span className="hours">10AM - 08PM</span>
            </div>
          </div>
        </div>
        {/* NEWSLETTER COLUMN */}
        <div className="section newsletter">
          <div className="sectionTitle">
            <h3>Newsletter</h3>
            <div className="line"></div>
          </div>
          <span>Dolor amet sit justo amet elitr clita ipsum elitr est.</span>
        </div>
        {/* MINI FOOTER */}
        <div className="miniFooter">
          <div className="head">
            <span>
              © <a className="underline" href="#">Your Site Name</a>, All Right Reserved. Designed By <a className="underline" href="https://htmlcodex.com/">HTML Codex</a>
            </span>
            <span>Distributed By <a className="underline" href="https://themewagon.com/">ThemeWagon</a></span>
          </div>
          <div className="links">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Cookies</Link>
            <Link href={'/'}>Help</Link>
            <Link href={'/'}>FQAs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
