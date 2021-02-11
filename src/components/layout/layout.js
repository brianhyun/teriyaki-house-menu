import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
