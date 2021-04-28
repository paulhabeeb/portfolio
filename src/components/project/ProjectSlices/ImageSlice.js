import * as React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '@utils/link-resolver'
import * as styles from './ImageSlice.module.scss'

function ImageSliceFigure({ caption, image }) {
    return (
        <figure>
            <img
                alt={image.alt}
                className={styles.image}
                height={image.height}
                src={image.url}
                width={image.width}
            />
            <figcaption className={styles.figcaption}>
                <RichText
                    render={caption.raw}
                    serializeHyperlink={linkResolver}
                />
            </figcaption>
        </figure>
    )
}

ImageSliceFigure.propTypes = {
    caption: PropTypes.object,
    image: PropTypes.object,
}

export default function ImageSlice({ images }) {
    return (
        <div className={styles.imageSlice}>
            {images.map((image, index) => (
                <ImageSliceFigure
                    caption={image.image_caption}
                    image={image.image}
                    key={index}
                />
            ))}
        </div>
    )
}

ImageSlice.propTypes = {
    images: PropTypes.array,
}
