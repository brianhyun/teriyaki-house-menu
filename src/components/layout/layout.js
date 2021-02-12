import React from "react"
import Footer from "./footer"
import SEO from "../seo"

export default function Layout({ children }) {
  return (
    <main>
      <SEO />
      {children}
      <Footer />
    </main>
  )
}
