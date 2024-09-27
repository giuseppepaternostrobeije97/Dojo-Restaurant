// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "./ui/components/Hero";
import { ServiceCard } from "./ui/components/serviceCard";
// -- SECTIONS
import { AboutSection } from "./ui/section/aboutSection";
// # DATA
import { services,timeDelay } from "./lib/placeholder-data";
// # TYPE
import { serviceCardType } from "./lib/definitions";

const Home: FC = () => {
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
    <div id="home" className="HomeContainer">
      <Hero homeHero />
      <div className="servicesSection">{displayService()}</div>
      <AboutSection />
    </div>
  );
};

export default Home;
