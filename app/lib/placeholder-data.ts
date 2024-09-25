// MOCK DATA

// -- TYPE
import {
  serviceCardType,
  menuItemType,
  chefType,
  reviewType,
  navbarItem,
  social,
} from "./definitions";

// -- ASSETS

// # MENU
import menu1 from "../../public/assets/menu-1.jpg";
import menu2 from "../../public/assets/menu-2.jpg";
import menu3 from "../../public/assets/menu-3.jpg";
import menu4 from "../../public/assets/menu-4.jpg";
import menu5 from "../../public/assets/menu-5.jpg";
import menu6 from "../../public/assets/menu-6.jpg";
import menu7 from "../../public/assets/menu-7.jpg";
import menu8 from "../../public/assets/menu-8.jpg";
// # CHEF
import chef1 from "../../public/assets/team-1.jpg";
import chef2 from "../../public/assets/team-2.jpg";
import chef3 from "../../public/assets/team-3.jpg";
import chef4 from "../../public/assets/team-4.jpg";
// # reviewers
import reviewer1 from "../../public/assets/testimonial-1.jpg";
import reviewer2 from "../../public/assets/testimonial-2.jpg";
import reviewer3 from "../../public/assets/testimonial-3.jpg";
import reviewer4 from "../../public/assets/testimonial-4.jpg";

// # MAIN DATA
export const websiteName: string = "Restaurant";
export const address:string = '123 Street, New York, USA';
export const telephone:string = '+012 345 67890';
export const email:string = 'info@example.com';

// # SERVICES CARDS
export const services: serviceCardType[] = [
  {
    title: "Master Chefs",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: "user-tie",
  },
  {
    title: "Quality Food",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: "utensils",
  },
  {
    title: "Online Order",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: "cart-plus",
  },
  {
    title: "24/7 Service",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: "headset",
  },
];

// # MENU
export const menu: menuItemType[] = [
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu1,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu2,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu3,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu4,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu5,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu6,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu7,
  },
  {
    name: "Chiken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: menu8,
  },
];

// # CHEF LIST
export const chefList: chefType[] = [
  {
    name: "Full",
    surame: "Name",
    role: "Desingation",
    profilePic: chef1,
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  },
  {
    name: "Full",
    surame: "Name",
    role: "Desingation",
    profilePic: chef2,
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  },
  {
    name: "Full",
    surame: "Name",
    role: "Desingation",
    profilePic: chef3,
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  },
  {
    name: "Full",
    surame: "Name",
    role: "Desingation",
    profilePic: chef4,
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  },
];

// # REVIEWS
export const reviews: reviewType[] = [
  {
    name: "Client Name",
    prefession: "Profession",
    review:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    reviewerImage: reviewer1,
  },
  {
    name: "Client Name",
    prefession: "Profession",
    review:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    reviewerImage: reviewer2,
  },
  {
    name: "Client Name",
    prefession: "Profession",
    review:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    reviewerImage: reviewer3,
  },
  {
    name: "Client Name",
    prefession: "Profession",
    review:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    reviewerImage: reviewer4,
  },
];

// # NAVBAR ITEMS
export const navbarItems: navbarItem[] = [
  {
    label: "home",
    link: "",
  },
  {
    label: "about",
    link: "about",
  },
  {
    label: "service",
    link: "service",
  },
  {
    label: "menu",
    link: "menu",
  },
  {
    label: "pages",
    link: "pages",
  },
  {
    label: "contact",
    link: "contact",
  },
];

export const sideNav: navbarItem[] = [
  {
    label: "booking",
    link: "booking",
  },
  {
    label: "our team",
    link: "team",
  },
  {
    label: "testimonial",
    link: "testimonial",
  },
];

// FOOTER
export const footerLink: navbarItem[] = [
  {
    label: "about us",
    link: "",
  },
  {
    label: "contact us",
    link: "",
  },
  {
    label: "reservation",
    link: "",
  },
  {
    label: "privacy policy",
    link: "",
  },
  {
    label: "terms & condition",
    link: "",
  },
];
// SOCIAL
export const socialLink: social[] = [
  {
    social: "twitter",
    socialLink: "",
  },
  {
    social: "facebook-f",
    socialLink: "",
  },
  {
    social: "youtube",
    socialLink: "",
  },
  {
    social: "linkedin-in",
    socialLink: "",
  },
];
