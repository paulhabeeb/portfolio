import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PageHeader } from '@components/common'

export default function About({ data }) {
    const { description, title } = data.prismicAbout.data

    return (
        <Layout>
            <PageHeader description={description} title={title} />
        </Layout>
    )
}

About.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query AboutQuery {
        prismicAbout(uid: { eq: "about" }) {
            data {
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
