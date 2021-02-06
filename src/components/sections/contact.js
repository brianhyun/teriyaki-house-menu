import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import styles from "./contact.module.css"

// Fix Issue with Invisible Marker
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulCompanyInfo {
          nodes {
            phoneNumber
            address
            openingHours
            location {
              lat
              lon
            }
          }
        }
      }
    `
  )

  const content = data.content.nodes[0]
  const { lat, lon } = content.location
  const coordinates = [lat, lon]

  return (
    <section id="contact">
      <h3>Reach out!</h3>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm px-0">
            <p>{content.phoneNumber}</p>
            {content.openingHours.map((day, index) => (
              <p key={index}>{day}</p>
            ))}
            <p>{content.address}</p>
          </div>
          <div className="col-sm px-0">
            <MapContainer
              center={coordinates}
              zoom={20}
              className={styles.mapContainer}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coordinates}>
                <Popup>We're by Stater Bros.!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
