import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h3>Site title</h3>
      </Link>
      <Link>About</Link>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <h3>Footer</h3>
    </footer>
  )
}
