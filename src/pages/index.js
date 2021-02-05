import React from "react"

import Layout from "../components/layout/layout"
import Landing from "../components/sections/landing"
import Menu from "../components/sections/menu"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Menu />
      <About />
      <Contact />
    </Layout>
  )
}
