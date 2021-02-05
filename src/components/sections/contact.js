import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Map from "ol/Map"
import View from "ol/View"
import OSM, { ATTRIBUTION } from "ol/source/OSM"
import VectorLayer from "ol/layer/Vector"
import Vector from "ol/source/Vector"
import Feature from "ol/Feature"
import TileLayer from "ol/layer/Tile"
import { fromLonLat } from "ol/proj"
import Point from "ol/geom/Point"
import "ol/ol.css"

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

  // OpenLayers Map
  useEffect(() => {
    const { lon, lat } = content.location
    const teriHouse = [lon, lat]
    const teriHouseWebMercator = fromLonLat(teriHouse)

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: teriHouseWebMercator,
        zoom: 16,
      }),
    })

    const layer = new VectorLayer({
      source: new Vector({
        features: [
          new Feature({
            geometry: new Point(teriHouseWebMercator),
          }),
        ],
      }),
    })

    map.addLayer(layer)
  }, [])

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
            <div id="map" className="w-100 h-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
