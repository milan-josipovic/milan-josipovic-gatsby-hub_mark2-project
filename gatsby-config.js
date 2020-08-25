require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "RIS centar Užice",
    description: "Regionalni inovacioni startup centar u Užicu (RIS centar) osnovan je uz pomoć „Programa podrške otvaranju regionalnih inovacionih startap centara“ kabineta ministra za inovacije i tehnološki razvoj u partnerstvu sa gradom Užicem i Akreditovanom regionalnom razvojnom agencijom „Zlatibor“ u cilju sistemske podrške inovacijama. Centar posluje kao deo mreže od 15 inovacionih centara formiranih u toku realizacije Programa",
    author: "@udruzenje programera Uzice DATA",
    twitterUsername:"",
    image: '/logoB.jpg',
    siteUrl: "https://rishubuzice.rs",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rishubuzice.rs',
        sitemap: 'https://rishubuzice.rs/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
