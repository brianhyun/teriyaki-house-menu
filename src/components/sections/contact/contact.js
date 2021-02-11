import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Map from "./map"

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulCompanyInfo {
          edges {
            node {
              phoneNumber
              address
              hours {
                hours {
                  day
                  hours
                }
              }
            }
          }
        }
      }
    `
  )

  const content = data.content.edges[0].node
  const coordinates = [34.10729, -117.83583]

  console.log(content)

  return (
    <section id="contact" className="container">
      <h2 className="mb-5">Info</h2>
      <div className="mb-5">
        <Map coordinates={coordinates} />
      </div>
      <div className="container px-0 mb-5">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="mb-0">{content.phoneNumber}</p>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="fw-bold mb-3">Address</h5>
            <p className="mb-0">{content.address}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h5 className="fw-bold mb-3">Open Hours</h5>
            <div>
              {content.hours.hours.map((day, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between mb-1"
                >
                  <p className="mb-0">{day.day}</p>
                  <p className="mb-0">{day.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
