import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top p-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
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
            <a className="nav-link text-white" href="#menu">
              Menu
            </a>
            <a className="nav-link text-white" href="#about">
              About
            </a>
            <a className="nav-link text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
