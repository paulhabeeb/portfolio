import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

import { Container, PageHeader } from '@components/common'
import styles from './About.module.scss'

export default function About({ nav, page }) {
    const {
        data: { description, meta_description, meta_title, title },
        type,
        uid,
    } = page

    return (
        <Container
            doc={{ type, uid }}
            metaDescription={meta_description}
            metaTitle={meta_title}
            nav={nav}
        >
            <PageHeader title={title} />
            <main className={styles.main}>
                <PrismicRichText field={description} />
            </main>
        </Container>
    )
}

About.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
}
