// -- COMPONENTS
import { FC } from "react";
import { Hero } from "../../ui/components/Hero";
import { AboutSection } from "../../ui/section/aboutSection";
import { ChefSection } from "../../ui/section/chefSection";


const About:FC = async ():Promise<JSX.Element> => {
  // Se avessi bisogno di recuperare dati, potrei farlo qui.
  // const res = await fetch('https://api.example.com/data');
  // const data = await res.json();

  
  return (
    <div>
      <Hero title="About Us" />
      <AboutSection />
      <ChefSection />
    </div>
  );

};


export default About;

