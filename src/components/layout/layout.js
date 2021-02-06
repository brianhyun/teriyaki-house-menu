import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <main>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </main>
  )
}
