import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AccordionItem from "./accordion-item"

export default function Menu() {
  const data = useStaticQuery(
    graphql`
      query {
        content: allContentfulCategory {
          nodes {
            title {
              title
            }
            items {
              id
              itemName
              lgPrice
              pltPrice
              regPrice
              description {
                description
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="menu" className="d-flex align-items-center">
      <div className="w-100">
        <h2 className="mb-5">Menu</h2>
        <div className="accordion" id="accordionExample">
          {data.content.nodes.map((category, index) => (
            <AccordionItem
              key={index}
              id={index}
              foodType={category.title.title}
              ariaExpanded={index === 0 ? true : false}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
