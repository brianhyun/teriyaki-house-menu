import React from "react"

export default function AccordionItem(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${props.id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.id}`}
          aria-expanded={props.ariaExpanded}
          aria-controls={`collapse${props.id}`}
        >
          {props.foodType}
        </button>
      </h2>
      <div
        id={`collapse${props.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${props.id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body bg-light">hello</div>
      </div>
    </div>
  )
}
