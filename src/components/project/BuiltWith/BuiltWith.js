import * as React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '@utils/link-resolver'
import * as styles from './BuiltWith.module.scss'

export default function BuiltWith({ tools }) {
    return (
        <div className={styles.builtWith}>
            <RichText render={tools.raw} serializeHyperlink={linkResolver} />
        </div>
    )
}

BuiltWith.propTypes = {
    tools: PropTypes.object,
}
