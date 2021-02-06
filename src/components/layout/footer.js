import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{ height: "30vh" }}
      className="d-flex align-items-center justify-content-center bg-dark text-white"
    >
      <p>Teriyaki House © {currentYear}</p>
    </footer>
  )
}
