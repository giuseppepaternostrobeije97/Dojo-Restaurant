// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "./ui/components/Hero";
import { ServiceCard } from "./ui/components/serviceCard";
// # DATA
import { services } from "./lib/placeholder-data";
// # TYPE
import { serviceCardType } from "./lib/definitions";

const Home: FC = () => {
  // # ASSING DELAY DYNAMICALLY TO SERVICE CARD
  const timeDelay: string[] = ["100", "300", "500", "700"];

  // # DISPLAY SERVICE CARDS
  function displayService(): JSX.Element[] {
    return services.map((service: serviceCardType, index: number) => {
      return (
        <div
          className={`service animate-fadeInUp delay-${timeDelay[index]}`}
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
    <div id="home" className="HomeContainer">
      <Hero homeHero />
      <div className="services">{displayService()}</div>
    </div>
  );
};

export default Home;
