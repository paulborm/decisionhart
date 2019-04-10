module.exports = {
    pathPrefix: "/decisionhart",
    siteMetadata: {
        title: `DecisionHart`,
        description: ``,
        author: `www.paulborm.de`,
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
            name: `DecisionHart`,
            short_name: `DecisionHart`,
            start_url: `/`,
            background_color: `#8806af`,
            theme_color: `#8806af`,
            display: `standalone`,
            orientation: `portrait`,
            icon: `src/images/decisionhart-icon.png`,
        },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-lodash`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
