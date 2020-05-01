module.exports = {
  siteMetadata: {
    title: `Pelego Guincho`,
    description: `Calculates toll fares for a given destination.`,
    author: `@fmilani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pelego Auto Guincho`,
        short_name: `Pel Guincho`,
        start_url: `/`,
        background_color: `#2f3931`,
        theme_color: `#2f3931`,
        display: `fullscreen`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
