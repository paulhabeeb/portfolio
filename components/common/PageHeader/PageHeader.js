import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

import styles from './PageHeader.module.scss'

export default function PageHeader({ children, description, title }) {
    return (
        <header>
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
    description: PropTypes.array,
    title: PropTypes.array,
}
