import React from "react"
import Img from "gatsby-image"

export default function CardMenu(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5">
      {props.data.map((category, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <div
              className="card-header bg-dark d-flex align-items-center justify-content-center"
              style={{ height: "15rem" }}
            ></div>
            <div className="card-body p-3">
              <h5 className="card-title">{category.title.title}</h5>
              <p className="card-text">
                {category.categoryDescription.categoryDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
