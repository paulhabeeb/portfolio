import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

import { Layout, PageHeader } from '@components/common'
import styles from './About.module.scss'

export default function About({ nav, page }) {
    const {
        data: { description, meta_description, meta_title, title },
        type,
        uid,
    } = page

    return (
        <Layout nav={nav}>
            <PageHeader
                doc={{
                    type,
                    uid,
                }}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={title}
            />
            <main className={styles.main}>
                <PrismicRichText field={description} />
            </main>
        </Layout>
    )
}

About.propTypes = {
    nav: PropTypes.object,
    page: PropTypes.object,
}
