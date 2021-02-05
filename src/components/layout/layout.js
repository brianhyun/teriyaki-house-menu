import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

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
    <main className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
    </main>
  )
}
