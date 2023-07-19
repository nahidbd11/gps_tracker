"use client";

import "leaflet/dist/leaflet.css";
import L, { icon } from "leaflet";

import { useCallback, useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import mIcon from "../_assets/location.jpg";
import Image from "next/image";
import { Icon } from "leaflet";

const center = {
  lat: 51.505,
  lng: -0.09,
};
const customIcon = new Icon({
  iconUrl: "/images/location.png",
  iconSize: [25, 40],
});

// const customIcon = L.divIcon({
//   className: "custom icon",
//   html: <div>🚀</div>,
// });
export default function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      icon={customIcon}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}
