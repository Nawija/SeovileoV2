/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "/SeovileoV2",
    siteMetadata: {
        title: `Tworzenie Stron Internetowych Seo www`,
        description: `Strona Internetowa poświęcona charakterystyce tworzenia szybkich stron www z wykorzystaniem popularnego frameworka GatsbyJS.`,
        author: `@Seovvileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: "0e6621bdd35bb44a65efb5a356263a",
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
                pageSize: 500,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Signika`,
                        file: `https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500&display=swap`,
                    },
                ],
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-scroll-reveal-with-new-react`,
            options: {
                threshold: 1,
                once: false,
                disable: false,
                selector: "[data-sal]",
                animateClassName: "sal-animate",
                disabledClassName: "sal-disabled",
                rootMargin: "0% 90%",
                enterEventName: "sal:in",
                exitEventName: "sal:out",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#e0fffe`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#e0fffe`,
                display: `standalone`,
                // display: `minimal-ui`,
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
