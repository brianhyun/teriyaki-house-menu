import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Landing() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <section
      id="landing"
      className="container-fluid position-relative d-flex align-items-center justify-content-center bg-dark text-white p-4 py-5"
    >
      <div
        className="position-absolute border border-warning d-flex flex-column align-items-center justify-content-center text-center text-warning p-2"
        style={{
          top: "20px",
          right: "20px",
          zIndex: "1",
        }}
      >
        <p className="m-0">Find us by</p>
        <p className="m-0">Stater Bros!</p>
      </div>
      <div className="position-relative" style={{ zIndex: "3" }}>
        <h1 className="mb-5">{data.site.siteMetadata.title}</h1>
        <h1 className="mb-5">
          An <span className="text-warning">Asian-American fusion</span>{" "}
          restaurant that combines the classics of Japanese and American
          cuisine, serving everything from rice bowls, sushi rolls, and bento
          boxes to burgers and french fries without comprising the integrity and
          quality from which these foods originate!
        </h1>

        <h1>
          <span className="text-warning">Recommendations:</span> Chicken Rice
          Bowl with Avocado and Green Onions. Chicken and Beef Plate. Chicken
          Bento Box. Avocado-Bacon-Cheese (ABC) Burger Combo.
        </h1>
      </div>
    </section>
  )
}
