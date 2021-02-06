import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Map from "../map"

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
    <section id="contact">
      <h3>Reach out!</h3>
      <Map coordinates={coordinates} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm px-0">
            <p>{content.phoneNumber}</p>
            {content.openingHours.map((day, index) => (
              <p key={index}>{day}</p>
            ))}
            <p>{content.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
