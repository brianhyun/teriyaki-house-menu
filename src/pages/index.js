import React from "react"

import Layout from "../components/layout"
import Landing from "../components/sections/landing"
import Menu from "../components/sections/menu"
import About from "../components/sections/about"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Menu />
      <About />
    </Layout>
  )
}
