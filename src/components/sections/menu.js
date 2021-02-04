import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AccordionItem from "./accordion-item"
import styles from "./menu.module.css"

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
      <div className={`${styles.menuContainer}`}>
        <h2 className="mb-4">Menu</h2>
        <div className="accordion" id="accordionExample">
          {data.content.nodes.forEach((category, index) => (
            <AccordionItem
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
