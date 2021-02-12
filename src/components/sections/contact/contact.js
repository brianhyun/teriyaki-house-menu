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

  return (
    <section className="container">
      <h1 className="mb-5">Info</h1>
      <div className="mb-5">
        <Map coordinates={coordinates} />
      </div>
      <div className="container px-0 mb-5">
        <div className="row g-5">
          <InfoItem title="Contact" info={content.phoneNumber} />
          <InfoItem title="Address" info={content.address} />
          <InfoItem title="Open Hours" hours={content.hours.hours} />
        </div>
      </div>
    </section>
  )
}

const InfoItem = props => {
  return (
    <>
      {props.hours ? (
        <div className="col-12 col-md-8 col-lg-6">
          <h4 className="fw-bold mb-3">{props.title}</h4>
          <div>
            {props.hours.map((day, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-1"
              >
                <p className="mb-0 fs-5">{day.day}</p>
                <p className="mb-0 fs-5">{day.hours}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="col-12 col-md-6">
          <h4 className="fw-bold mb-3">{props.title}</h4>
          <p className="mb-0 fs-5">{props.info}</p>
        </div>
      )}
    </>
  )
}
