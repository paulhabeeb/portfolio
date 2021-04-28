import * as React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '@utils/link-resolver'
import * as styles from './TextSlice.module.scss'

export default function TextSlice({ text }) {
    return (
        <div className={styles.textSlice}>
            <RichText
                render={text.text_body.raw}
                serializeHyperlink={linkResolver}
            />
        </div>
    )
}

TextSlice.propTypes = {
    text: PropTypes.object,
}
