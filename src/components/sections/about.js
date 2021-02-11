import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulAbout(sort: { fields: createdAt }) {
          nodes {
            title
            description {
              description
            }
          }
        }
      }
    `
  )

  return (
    <section className="container">
      <h2 className="mb-5">About Us</h2>
      <div className="container px-0">
        <div className="row g-5 justify-content-between">
          {data.content.nodes.map((section, index) => (
            <AboutItem
              key={index}
              title={section.title}
              description={section.description.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const AboutItem = props => {
  return (
    <div className="col-12 col-lg-6">
      <h4 className="mb-4">{props.title}</h4>
      <p className="my-0">{props.description}</p>
    </div>
  )
}
