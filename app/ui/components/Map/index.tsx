"use client";

import React, { FC } from "react";
import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";

// Define the style for the map container using Tailwind
const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
};

type MapProps = {
  lng: number;
  lat: number;
};

const Map: FC<MapProps> = (props): JSX.Element => {
  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
