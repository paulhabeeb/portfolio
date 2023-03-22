import PropTypes from 'prop-types'

import ImageSlice from './ImageSlice'
import TextSlice from './TextSlice'

export default function ProjectSlices({ slices }) {
    return (
        <>
            {slices.map(slice => {
                if (slice.slice_type === 'image') {
                    return <ImageSlice images={slice.items} key={slice.id} />
                }
                if (slice.slice_type === 'text') {
                    return <TextSlice text={slice.primary} key={slice.id} />
                }

                return null
            })}
        </>
    )
}

ProjectSlices.propTypes = {
    slices: PropTypes.array,
}
