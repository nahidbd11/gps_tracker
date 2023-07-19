"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import React, { useEffect, useState } from "react";
import DraggableMarker from "./DraggleMarker";

const markerList = [
  {
    position: [23.8223, 90.3654],
  },
  {
    position: [23.7662, 90.3589],
  },
];

const endPosition = [23.822601689546275, 90.36420522988678];

const MyMap = () => {
  const [userPosition, setUserPosition] = useState([0, 0]); // Default position (0, 0) for initial map center

  useEffect(() => {
    const fetchUserPosition = () => {
      // Get the user's current position using the geolocation API
      navigator?.geolocation?.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position?.coords;
          console.log(latitude, longitude);
          setUserPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user position:", error);
        }
      );
    };

    // Fetch user position initially and then every 2 seconds
    fetchUserPosition();
    // const interval = setInterval(fetchUserPosition, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const positions = [
    [23.822337, 90.3654296],
    [23.822601689546275, 90.36420522988678],
  ];

  return (
    <MapContainer
      className={`map`}
      center={[23.685, 90.3563]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={100}
      />
      <Polyline positions={positions} color="blue" />
      <Marker position={userPosition}>
        <Popup>Your Current Position</Popup>
      </Marker>
      <Marker position={endPosition}>
        <Popup>End Position</Popup>
      </Marker>

      {/* <DraggableMarker /> */}
      <h2>Nahid</h2>
    </MapContainer>
  );
};

export default MyMap;
