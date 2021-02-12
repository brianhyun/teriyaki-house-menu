import React from "react"
import yelpLogo from "../../../static/yelp.svg"

export default function Footer() {
  return (
    <footer
      style={{ height: "40vh" }}
      className="d-flex flex-column align-items-center justify-content-center bg-dark text-white"
    >
      <div className="mb-4">
        <a
          href="https://www.yelp.com/biz/teriyaki-house-san-dimas-2"
          target="_blank"
          rel="noreferrer"
        >
          <img src={yelpLogo} alt="yelp logo" width="30" height="30" />
        </a>
      </div>
      <p className="m-0">Since 2017</p>
    </footer>
  )
}
