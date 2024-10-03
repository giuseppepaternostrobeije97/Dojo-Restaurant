"use client";

// -- REACT
import { FC, useEffect } from "react";
// -- STYLE
import "./testimonial-section.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// -- COMPONENTS
import { HeadSection } from "../../components/HeadSection";
// -- NEXT
import dynamic from "next/dynamic";
import Image from "next/image";
// -- TYPE
declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}
import { reviewType } from "@/app/lib/definitions";
// -- DATA
import { reviews } from "@/app/lib/placeholder-data";

const OwlCarousel = dynamic(() => import("owl.carousel"), {
  ssr: false,
});

export const TestimonialSection: FC = (): JSX.Element => {
  // # INIT OWL
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
      require("owl.carousel");

      // Initialize Owl Carousel here
      window.$(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        center: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          980: {
            items: 3,
          },
        },
      });
    }
  }, []);
  // # RENDER TESTIMONIAL
  const displayTestimonial = (): JSX.Element[] => {
    return reviews.map((item: reviewType, index: number) => {
      return (
        <div className="reviewCard " key={index}>
          <i className="fa-solid fa-quote-left"></i>
          <p>{item.review}</p>
          <div className="user">
            <div className="reviewerPic">
              <Image alt="reviewer pic" src={item.reviewerImage} />
            </div>
            <div className="reviewerProfile">
              <h6>{item.name}</h6>
              <span>{item.prefession}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="testimonialSection" className="wow fadeInUp">
      {/* HEAD SECTION */}
      <HeadSection headText="Testimonial" title="Our Client Say!!!" />
      {/* CAROUSEL */}
      <div className="owl-carousel testimonialContainer">
        {displayTestimonial()}
      </div>
    </div>
  );
};
