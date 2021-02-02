import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./landing.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <Landing siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <About />
    </Layout>
  )
}

export const Landing = props => (
  <section className="d-flex align-items-center">
    <div>
      <h1 className="display-4 mb-3">{props.siteTitle}</h1>
      <p>Japanese-Korean fusion with an American touch.</p>
    </div>
  </section>
)

export const Menu = () => (
  <section id="menu">
    <div>
      <h1>Menu</h1>
    </div>
  </section>
)

export const About = () => (
  <section id="about">
    <div>
      <h1>About</h1>
    </div>
  </section>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
