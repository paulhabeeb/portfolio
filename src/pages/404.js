import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PageHeader } from '@components/common'

export default function NotFoundPage({ data }) {
    const {
        description,
        meta_description,
        meta_title,
        title,
    } = data.prismicPageNotFound.data

    return (
        <Layout>
            <PageHeader
                description={description}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={title}
            />
        </Layout>
    )
}

NotFoundPage.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query PageNotFoundQuery {
        prismicPageNotFound(uid: { eq: "page-not-found" }) {
            data {
                description {
                    raw
                }
                meta_description
                meta_title
                title {
                    raw
                }
            }
        }
    }
`
