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
    <section id="about" className="container px-0 d-flex align-items-center">
      <div>
        <h2 className="text-center">About Us</h2>
        {data.content.nodes.map((section, index) => (
          <AboutItem
            key={index}
            title={section.title}
            description={section.description.description}
          />
        ))}
      </div>
    </section>
  )
}

export const AboutItem = props => {
  return (
    <div className="mt-5">
      <h4 className="mb-4">{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}
