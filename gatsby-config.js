module.exports = {
  pathPrefix: "/graphql-wroclaw-website",
  siteMetadata: {
    title: `GraphQL Wroclaw`,
    description: `GraphQL Wroclaw has rapidly grown into a thriving community. Regular Meetup events are a chance to exchange knowledge and experience with our peers. People. Talks. Technology.`,
    siteUrl: "https://graphqlwroclaw.org",
    author: `@mirumee`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/icons/graphql_wroclaw_logo.svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10159761-24",
        head: true,
        anonymize: true,
      },
    },
  ],
}
