'use client'

import React,{FC} from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Define the style for the map container using Tailwind
const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: '400px'
};

const center = {
  lat: 45.610550610806136,
  lng:  9.233765268536718,
};

const Map:FC = ():JSX.Element => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
