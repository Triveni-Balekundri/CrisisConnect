import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LiveMap() {
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={[15.8497, 74.4977]} zoom={13} style={{ height: "100%" }}>
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[15.8497, 74.4977]}>
          <Popup>Belagavi Crisis Point</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LiveMap;