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
      className="container-fluid position-relative bg-dark text-white p-4"
    >
      <div
        className="position-absolute border border-white border-1 rounded-circle d-flex flex-column align-items-center justify-content-center"
        style={{
          height: "150px",
          width: "150px",
          top: "20px",
          right: "20px",
          transform: "rotate(30deg)",
          zIndex: "1",
        }}
      >
        <p className="m-0">Find us by</p>
        <p className="m-0">Stater Bros!</p>
      </div>
      <div style={{ position: "relative", zIndex: "3" }}>
        <h1 className="mb-5">{data.site.siteMetadata.title}</h1>
        <h1 className="mb-5">
          An Asian-American fusion restaurant that combines the classics of
          Japanese and American cuisine, serving everything from sushi rolls and
          bento boxes to classic American burgers without comprising the
          integrity and quality from which these foods originate!
        </h1>

        <h1>
          Recommendations: Chicken Rice Bowl with Avocado and Green Onions.
          Chicken and Beef Plate. Chicken Bento Box. Avocado-Bacon-Cheese (ABC)
          Burger Combo.
        </h1>
      </div>
    </section>
  )
}
