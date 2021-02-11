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
    <section id="about" className="container">
      <h2 className="mb-5">About Us</h2>
      {data.content.nodes.map((section, index) => (
        <AboutItem
          key={index}
          title={section.title}
          description={section.description.description}
        />
      ))}
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
