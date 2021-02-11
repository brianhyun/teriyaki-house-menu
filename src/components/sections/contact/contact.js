import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Map from "./map"

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulCompanyInfo {
          nodes {
            phoneNumber
            address
            openingHours
          }
        }
      }
    `
  )

  const content = data.content.nodes[0]
  const coordinates = [34.10729, -117.83583]

  return (
    <section id="contact" className="container">
      <h2 className="mb-5">Info</h2>
      <Map coordinates={coordinates} />
      <div>
        <p className="fw-bold">Contact</p>
        <p>{content.phoneNumber}</p>
        <p>{content.address}</p>
      </div>
      <div>
        <p className="fw-bold">Open Hours</p>
        {content.openingHours.map((day, index) => (
          <p key={index} className="pb-2">
            {day}
          </p>
        ))}
      </div>
    </section>
  )
}
