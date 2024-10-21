// -- COMPONENTS
import { FC } from "react";
import { Hero } from "@/app/ui/components/Hero";
import { ReservationBanner } from "@/app/ui/components/ReservationBanner";


// Component Booking come Server Component con fetching lato server
const Booking: FC = async (): Promise<JSX.Element> => {

  return (
    <div id="booking">
      <Hero title="Booking" />
      <div className="reservationBannerContainer">
        <ReservationBanner />
      </div>
    </div>
  );
};

export default Booking;

