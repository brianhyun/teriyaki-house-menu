import React from "react"
import logo from "../../../static/logo.png"

export default function Header() {
  return (
    <nav className="navbar navbar-light position-absolute w-100">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="30" />
        </a>
      </div>
    </nav>
  )
}
