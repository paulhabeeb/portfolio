import * as React from 'react'
import PropTypes from 'prop-types'

import * as styles from './ProjectSlices.module.scss'
import ImageSlice from './ImageSlice'
import TextSlice from './TextSlice'

export default function ProjectSlices({ slices }) {
    return (
        <div className={styles.slices}>
            {slices.map(slice => {
                if (slice.slice_type === 'image') {
                    return <ImageSlice images={slice.items} key={slice.id} />
                }
                if (slice.slice_type === 'text') {
                    return <TextSlice text={slice.primary} key={slice.id} />
                }

                return null
            })}
        </div>
    )
}

ProjectSlices.propTypes = {
    slices: PropTypes.array,
}
