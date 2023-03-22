import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'
import { linkResolver } from '@utils/link-resolver'

import { PageHelmet } from '@components/common'
import styles from './PageHeader.module.scss'

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
                url={doc && linkResolver(doc)}
            />
            <div className={styles.title}>
                <PrismicRichText field={title} />
            </div>
            {description && (
                <div className={styles.description}>
                    <PrismicRichText field={description} />
                </div>
            )}
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
