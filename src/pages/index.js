import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PageHeader } from '@components/common'
import { ProjectList } from '@components/homepage'

export default function Home({ data }) {
    const { body, description, title } = data.prismicHomepage.data

    return (
        <Layout showNav={false}>
            <PageHeader description={description} title={title} />
            <main>
                <ProjectList projects={body} />
            </main>
        </Layout>
    )
}

Home.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query HomepageQuery {
        prismicHomepage(uid: { eq: "homepage" }) {
            data {
                body {
                    ... on PrismicHomepageBodyProject {
                        id
                        primary {
                            project {
                                document {
                                    ... on PrismicProject {
                                        data {
                                            description {
                                                raw
                                            }
                                            name {
                                                raw
                                            }
                                        }
                                    }
                                }
                                uid
                            }
                        }
                        slice_type
                    }
                }
                title {
                    raw
                }
                description {
                    raw
                }
            }
        }
    }
`
