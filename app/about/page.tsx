// -- COMPONENTS
import { FC } from "react";
import { Hero } from "../ui/components/Hero";
import { AboutSection } from "../ui/section/aboutSection";
import { ChefSection } from "../ui/section/chefSection";


const About:FC = async ():Promise<JSX.Element> => {

  
  return (
    <div>
      <Hero title="About Us" />
      <AboutSection />
      <ChefSection />
    </div>
  );

};


export default About;

