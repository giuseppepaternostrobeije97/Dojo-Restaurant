// -- COMPONENTS
import { FC } from "react";
import { Hero } from "@/app/ui/components/Hero";
import { ReservationBanner } from "@/app/ui/components/ReservationBanner";

// Definisci il tipo per il ristorante
interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
}

// Component Booking come Server Component con fetching lato server
const Booking: FC = async (): Promise<JSX.Element> => {
  // Effettua il fetch dei dati lato server
  const response = await fetch("https://private-anon-2e40ed541b-pizzaapp.apiary-mock.com/restaurants/");
  
  // Controlla che il fetch sia andato a buon fine
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const restaurants: Restaurant[] = await response.json();

  return (
    <div id="booking">
      <Hero title="Booking" />
      <div className="reservationBannerContainer">
        <ReservationBanner />
      </div>

      {/* Mostra la lista dei ristoranti */}
      <div className="restaurant-list">
        <h2>Available Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>Cuisine: {restaurant.cuisine}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;


// // -- COMPONENTS
// import { FC } from "react";
// import { Hero } from "@/app/ui/components/Hero";
// import { ReservationBanner } from "@/app/ui/components/ReservationBanner";



// const Booking: FC = async (): Promise<JSX.Element> => {

//   return (
//     <div id="booking">
//       <Hero title="Booking" />
//       <div className="reservationBannerContainer">
//         <ReservationBanner />
//       </div>
//     </div>
//   );
// };

// export default Booking;
