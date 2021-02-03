import React from "react"

import AccordionItem from "./accordion-item"
import styles from "./menu.module.css"

export default function Menu() {
  return (
    <section id="menu" className="d-flex align-items-center">
      <div className={`${styles.menuContainer}`}>
        <h2 className="mb-4">Menu</h2>
        <div className="accordion" id="accordionExample">
          <AccordionItem foodType="RiceBowls" ariaExpanded="true">
            Jelly
          </AccordionItem>
          <AccordionItem foodType="Rice and Steamed Veggie Bowls">
            Jelly
          </AccordionItem>
          <AccordionItem foodType="Plates">Jelly</AccordionItem>
        </div>
      </div>
    </section>
  )
}
