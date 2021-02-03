import React from "react"

export default function AccordionItem(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded={props.ariaExpanded}
          aria-controls="collapseOne"
        >
          {props.foodType}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body bg-light">{props.children}</div>
      </div>
    </div>
  )
}
