import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'
import cn from 'classnames'

import styles from './PageHeader.module.scss'

export default function PageHeader({
    children,
    description,
    title,
    underlineTitle,
}) {
    const titleClass = cn(styles.title, {
        [styles.underline]: underlineTitle,
    })

    return (
        <header>
            <div className={titleClass}>
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

PageHeader.defaultProps = {
    underlineTitle: false,
}

PageHeader.propTypes = {
    children: PropTypes.node,
    description: PropTypes.array,
    title: PropTypes.array,
    underlineTitle: PropTypes.bool,
}
