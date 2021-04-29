import * as React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver, prismicLink } from '@utils/link-resolver'

import * as styles from './PageHeader.module.scss'
import { PageHelmet } from '@components/common'

export default function PageHeader({
    children,
    description,
    doc,
    metaDescription,
    metaTitle,
    title,
}) {
    return (
        <header>
            <PageHelmet
                description={metaDescription}
                title={metaTitle}
                url={doc && prismicLink(doc)}
            />
            <div className={styles.title}>
                <RichText
                    render={title.raw}
                    serializeHyperlink={linkResolver}
                />
            </div>
            <div className={styles.description}>
                <RichText
                    render={description.raw}
                    serializeHyperlink={linkResolver}
                />
            </div>
            {children}
        </header>
    )
}

PageHeader.propTypes = {
    children: PropTypes.node,
    description: PropTypes.object,
    doc: PropTypes.object,
    metaDescription: PropTypes.string,
    metaTitle: PropTypes.string,
    title: PropTypes.object,
}
