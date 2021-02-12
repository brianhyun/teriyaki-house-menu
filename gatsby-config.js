require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Teriyaki House`,
    description: `The main website for Teriyaki House, San Dimas.`,
    author: `Brian Hyun`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teriyaki House`,
        short_name: `Teriyaki House`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
