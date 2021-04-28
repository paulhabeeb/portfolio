import * as React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '@utils/link-resolver'

import * as styles from './PageHeader.module.scss'

export default function PageHeader({ children, description, title }) {
    return (
        <header>
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
    title: PropTypes.object,
}
