import React from "react"
import Img from "gatsby-image"

export default function CardMenu(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5">
      {props.data.map((category, index) => (
        <>
          <div className="col">
            <div className="card h-100">
              <div
                className="card-header bg-dark d-flex align-items-center justify-content-center"
                style={{ height: "13rem", width: "100%" }}
              >
                <Img
                  fixed={category.node.icon.fixed}
                  alt={category.node.title.title}
                />
              </div>
              <div className="card-body p-3 d-flex flex-column align-items-start justify-content-between">
                <div>
                  <h5 className="card-title">{category.node.title.title}</h5>
                  <p className="card-text">
                    {category.node.categoryDescription.categoryDescription}
                  </p>
                </div>
                <a
                  href={`modal${index}`}
                  className="btn btn-primary stretched-link mt-4"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                >
                  See Items
                </a>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id={`modal${index}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {category.node.title.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="list-group list-group-flush">
                    {category.node.items.map((item, index) => (
                      <li key={index} className="list-group-item">
                        {item.itemName}
                        {item.regPrice && item.regPrice}
                        {item.lgPrice && item.lgPrice}
                        {item.pltPrice && item.pltPrice}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
