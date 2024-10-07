// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../../ui/components/Hero";
// -- SECTIONS
import { TestimonialSection } from "../../ui/section/testimonialSection";

const Testimonial: FC = () => {
  return <div>
    <Hero title="Testimonial" />
    <TestimonialSection/>
  </div>;
};

export default Testimonial;