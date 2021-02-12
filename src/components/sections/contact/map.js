import React, { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map(props) {
  useEffect(() => {
    const L = require("leaflet")

    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
  }, [])

  if (typeof window !== "undefined") {
    return (
      <MapContainer
        center={props.coordinates}
        zoom={20}
        scrollWheelZoom={false}
        style={{
          height: "40vh",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.coordinates}>
          <Popup>We're by Stater Bros.!</Popup>
        </Marker>
      </MapContainer>
    )
  }

  return null
}
