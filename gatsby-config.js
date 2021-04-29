module.exports = {
    siteMetadata: {
        title: 'Portfolio',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-preload-fonts',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('autoprefixer')],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'ph-portfolio',
                schemas: {
                    about: require('./src/schemas/about.json'),
                    homepage: require('./src/schemas/homepage.json'),
                    nav: require('./src/schemas/nav.json'),
                    page_not_found: require('./src/schemas/page_not_found.json'),
                    project: require('./src/schemas/project.json'),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                sassOptions: {
                    includePaths: ['src/styles'],
                },
            },
        },
    ],
}
