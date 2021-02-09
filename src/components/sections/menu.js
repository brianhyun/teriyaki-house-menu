import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CardMenu from "./menu-display/card-menu"

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

  console.log(data)

  return (
    <section id="menu" className="container px-0 d-flex align-items-center">
      <div className="w-100">
        <h2 className="mb-5 text-center">Menu</h2>
        <CardMenu data={data.content.edges} />
      </div>
    </section>
  )
}
