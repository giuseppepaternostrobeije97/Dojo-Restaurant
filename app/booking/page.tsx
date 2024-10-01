// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../ui/components/Hero";
// -- SECTIONS
import { ReservationBanner } from "../ui/components/ReservationBanner";

const Booking: FC = () => {
  return <div id="booking">
    <Hero title="Booking" />
    <div className="reservationBannerContainer">
        <ReservationBanner/>
    </div>
  </div>;
};

export default Booking;
