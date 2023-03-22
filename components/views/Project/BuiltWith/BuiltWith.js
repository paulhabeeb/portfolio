import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

import styles from './BuiltWith.module.scss'

export default function BuiltWith({ tools }) {
    return (
        <div className={styles.builtWith}>
            <PrismicRichText field={tools} />
        </div>
    )
}

BuiltWith.propTypes = {
    tools: PropTypes.object,
}
