module.exports = {
  pathPrefix: "/rkabani19.github.io",
  siteMetadata: {
    title: `Rohail Kabani | Software Engineer`,
    description: `Rohail Kabani is a software engineer who loves developing software that makes an impact.`,
    author: `Rohail Kabani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-external-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "nofollow"
          }
        }
        ]
      }
    },
  ],
}
