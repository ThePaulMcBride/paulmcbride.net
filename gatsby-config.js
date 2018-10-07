const { name } = require('./package.json');
const config = require('./config')

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    author: 'Paul McBride',
    title: config.title,
    tagline: config.tagline,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blog Starter',
        short_name: 'Blog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'assets/logo.jpg',
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              withWebp: true,
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.77,
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap'
  ],
}
