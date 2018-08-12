module.exports = {
  siteMetadata: {
    title: 'With Design Blog',
    author: 'Cody Reeves',
    description: 'With Design Blog',
    siteUrl: '',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `tomato`,
      showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-NGS4NGS",
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.withdesign.ca`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "BlogWithDesign",
        short_name: "BlogWithDesign",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#DA2536",
        display: "minimal-ui",
        icon: `src/img/touch/favicon-57.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `touch/favicon-57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `touch/favicon-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `touch/favicon-114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `touch/favicon-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `touch/favicon-152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `touch/favicon-180.png`,
            sizes: `180x180`,
            type: `image/png`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Montserrat\:300,400,600,700`,
                `Martel\:300,400,600,700`
              ]
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 0rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-plugin-sass',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
