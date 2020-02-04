module.exports = {
  siteMetadata: {
    title: 'Positiva(+)',
    author: 'positivaapp',
    siteUrl: 'https://positiva-app.com',
    image: '/cover.jpg',
    description:
      'Una app segura para personas con VIH, para monitorear su salud y encontrar apoyo.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            subsets: [`latin`],
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Postiva(+)`,
        short_name: `Positiva(+)`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
