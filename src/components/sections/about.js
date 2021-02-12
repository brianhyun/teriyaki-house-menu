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
    <section className="container-fluid bg-dark text-white p-0">
      <div className="px-4 py-5">
        <h1>About Us</h1>
        {data.content.nodes.map(section => (
          <div className="container-fluid px-0 mt-5">
            <div className="row">
              <div className="col-12 col-md-4">
                <h1 className="me-5 mb-3">{section.title}</h1>
              </div>
              <div className="col-12 col-md-8">
                <h1 className="my-0">{section.description.description}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
