import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'
import styles from './TextSlice.module.scss'

export default function TextSlice({ text }) {
    return (
        <div className={styles.textSlice}>
            <PrismicRichText field={text.text_body} />
        </div>
    )
}

TextSlice.propTypes = {
    text: PropTypes.object,
}
