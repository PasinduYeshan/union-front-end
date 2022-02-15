import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const OpenStreetMap = () => {
  const centerPosition = [6.9356, 79.8466];
  return (
    <>
      <MapContainer center={centerPosition} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={centerPosition} >
          <Popup>UPTO location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default OpenStreetMap;
