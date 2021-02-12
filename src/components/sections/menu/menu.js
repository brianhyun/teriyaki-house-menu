import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CardMenu from "./card-menu"

export default function Menu() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulCategory(sort: { fields: orderId, order: ASC }) {
          edges {
            node {
              title {
                title
              }
              categoryDescription {
                categoryDescription
              }
              items {
                itemName
                lgPrice
                pltPrice
                regPrice
                description {
                  description
                }
              }
              icon {
                fixed(width: 120) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="menu" className="container">
      <h1 className="mb-5">Menu</h1>
      <CardMenu data={data.content.edges} />
    </section>
  )
}
