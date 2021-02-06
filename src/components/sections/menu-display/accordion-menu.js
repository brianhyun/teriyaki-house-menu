import React from "react"

export default function AccordionMenu(props) {
  return (
    <div className="accordion" id="accordionExample">
      {props.data.map((category, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index ? true : false}
              aria-controls={`collapse${index}`}
            >
              {category.title.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-light">hello</div>
          </div>
        </div>
      ))}
    </div>
  )
}
