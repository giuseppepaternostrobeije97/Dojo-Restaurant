'use client';

// -- REACT
import { FC ,useEffect} from "react";
// -- COMPONENTS
import { Hero } from "../ui/components/Hero";
import { ServiceCard } from "../ui/components/serviceCard";
// -- DATA
import { services } from "../lib/placeholder-data";
// -- TYPE
import { serviceCardType } from "../lib/definitions";
// -- STLE
import './services.scss';
// -- ANIMATION
import { WOW } from 'wowjs';


const Services: FC = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  // # ASSING DELAY DYNAMICALLY TO SERVICE CARD
  const timeDelay: string[] = ["0.1s", "0.3s", "0.5s", "0.7s"];

  // # DISPLAY SERVICE CARDS
  function displayService(): JSX.Element[] {
    return services.map((service: serviceCardType, index: number) => {
      return (
        <div
          className="service wow fadeInUp"
          data-wow-delay={timeDelay[index]}
          key={index}
        >
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </div>
      );
    });
  }

  return (
    <div id="services">
      <Hero title="Services" />
      <div className="headSection">
        <div className="headText">
          <div className="line"></div>
          <span>Our Services</span>
          <div className="line"></div>
        </div>
        <h3>Explore Our Services</h3>
      </div>
      <div className="servicesSection">
        {displayService()}
        {displayService()}
      </div>
    </div>
  );
};

export default Services;
