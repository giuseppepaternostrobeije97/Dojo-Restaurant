// TYPE FOR ALL DATA

import { StaticImageData } from "next/image";

// # SERVICE CARD
export type serviceCardType = {
  icon: string;
  title: string;
  description: string;
};

// # MENU ITEMS
export type menuItemType = {
  image: string | StaticImageData;
  name: string;
  description: string;
  price: string | number;
};

// # CHEF
export type chefType = {
  name: string;
  surname: string;
  role: tring;
  profilePic: string | StaticImageData;
  social: social[];
};

// # REVIEWS
export type reviewType = {
  review: string;
  name: string;
  prefession: string;
  reviewerImage: string | StaticImageData;
};

// # NAVBAR ITEM
export type navbarItem = {
    link:string;
    label:string;
}

// # SOCIAL
export type social = {
    social:string;
    socialLink:string;
}