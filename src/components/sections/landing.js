import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import landingPhoto from "../../../static/landing.svg"

import styles from "./landing.module.css"

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
      className="container px-0 position-relative d-flex align-items-center w-100"
    >
      <div>
        <h1 className="display-4 mb-3">{data.site.siteMetadata.title}</h1>
        <p>Japanese-Korean fusion with an American touch.</p>
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y w-50">
        <img
          src={landingPhoto}
          alt="cashier taking customer's order"
          className="w-100"
        />
      </div>

      <a
        className={`position-absolute d-flex flex-column align-items-center ${styles.seeMenuBox}`}
        href="#menu"
      >
        <p className="my-0">See Menu</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </a>
    </section>
  )
}