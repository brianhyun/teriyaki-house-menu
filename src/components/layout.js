import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css"

export default function Layout({ children }) {
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
    <main className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </main>
  )
}

export const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container-fluid px-0">
      <Link className="navbar-brand" to="/">
        {props.siteTitle}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-link" href="#menu">
            Menu
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export const Footer = () => (
  <footer>
    <h3>Footer</h3>
  </footer>
)
