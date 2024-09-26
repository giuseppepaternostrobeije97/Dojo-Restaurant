// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "./ui/components/Hero";


 const Home:FC = () => {
  return (
    <div id="home" className="HomeContainer" >
      <Hero homeHero/>
    </div>
  );
}

export default Home;