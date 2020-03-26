const siteName = "Patrick Huskey"
const siteUrl = "https://www.patrickhuskey.me"

module.exports = {
  siteMetadata: {
    title: siteName,
    siteUrl: siteUrl
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
        stripQueryString: true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteName,
        short_name: "PatHuskey",
        start_url: "/",
        background_color: "#424cd0",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/img/icon.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 75
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Oswald:400,700"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID
      }
    }
  ]
}
