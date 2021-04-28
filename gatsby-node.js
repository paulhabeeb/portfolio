const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            },
        },
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const projects = await graphql(`
        query ProjectQuery {
            allPrismicProject {
                edges {
                    node {
                        uid
                    }
                }
            }
        }
    `)

    projects.data.allPrismicProject.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.uid}`,
            component: path.resolve(__dirname, `src/templates/Project.js`),
            context: { uid: node.uid },
        })
    })
}
