import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import * as styles from './about.module.scss'
import { Layout, PageHeader } from '@components/common'

export default function About({ data }) {
    const {
        description,
        meta_description,
        meta_title,
        title,
    } = data.prismicAbout.data

    return (
        <Layout>
            <PageHeader
                doc={{
                    type: data.prismicAbout.type,
                    uid: data.prismicAbout.uid,
                }}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={title}
            />
            <main className={styles.main}>
                <RichText render={description.raw} />
            </main>
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
                description {
                    raw
                }
                meta_description
                meta_title
                title {
                    raw
                }
            }
            type
            uid
        }
    }
`
