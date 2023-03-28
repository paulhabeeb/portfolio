import { createRef, forwardRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Helmet } from 'react-helmet'
import { PrismicRichText } from '@prismicio/react'

import cn from 'classnames'
import styles from './ImageSlice.module.scss'

const ImageSliceFigure = forwardRef(({ caption, handleClick, image }, ref) => {
    return (
        <figure>
            <div
                onClick={handleClick}
                onKeyPress={handleClick}
                role='presentation'
            >
                <Image
                    alt={image.alt}
                    className={styles.image}
                    height={image.l.dimensions.height}
                    ref={ref}
                    src={image.l.url}
                    width={image.l.dimensions.width}
                />
            </div>
            <figcaption className={styles.figcaption}>
                <PrismicRichText field={caption} />
            </figcaption>
        </figure>
    )
})

ImageSliceFigure.propTypes = {
    caption: PropTypes.array,
    handleClick: PropTypes.func,
    image: PropTypes.object,
}

ImageSliceFigure.displayName = 'ImageSliceFigure'

function ImageModal({ caption, coords, handleClick, image }) {
    const [imageIsZoomed, setImageIsZoomed] = useState(false)
    const [overlayIsShown, setOverlayIsShown] = useState(false)

    useEffect(() => {
        setTimeout(setImageIsZoomed, 50, true)
        setTimeout(setOverlayIsShown, 150, true)
    }, [])

    const imageWrapper = cn(styles.imageModal, {
        [styles.isZoomed]: imageIsZoomed,
    })

    const imageWrapperWidth = {
        width: `calc(${coords.width} / ${coords.height} * 85vh)`,
    }

    const overlay = cn(styles.overlay, {
        [styles.overlayIsShown]: overlayIsShown,
    })

    return (
        <>
            <Helmet bodyAttributes={{ class: styles.modalIsOpen }} />
            <div className={imageWrapper} style={imageWrapperWidth}>
                <ImageSliceFigure
                    caption={caption}
                    handleClick={handleClick}
                    image={image}
                />
            </div>
            <div
                className={overlay}
                onClick={handleClick}
                onKeyPress={handleClick}
                role='button'
                tabIndex={0}
            >
                <button className={styles.close} type='button'>
                    &times;
                </button>
            </div>
        </>
    )
}

ImageModal.propTypes = {
    caption: PropTypes.object,
    coords: PropTypes.object,
    handleClick: PropTypes.func,
    image: PropTypes.object,
}

function InlineImage({ caption, image }) {
    const imageRef = createRef()
    const [isOpen, setIsOpen] = useState(false)
    const [coords, setCoords] = useState(null)

    const handleOpen = () => {
        if (!/Mobi/i.test(navigator.userAgent)) {
            setIsOpen(true)
            setCoords(imageRef.current.getBoundingClientRect())
        }
    }

    const handleClose = () => setIsOpen(false)

    return (
        <>
            <div className={styles.inlineImageWrapper}>
                <ImageSliceFigure
                    caption={caption}
                    handleClick={handleOpen}
                    image={image}
                    ref={imageRef}
                />
            </div>
            {isOpen && (
                <ImageModal
                    caption={caption}
                    coords={coords}
                    handleClick={handleClose}
                    image={image}
                />
            )}
        </>
    )
}

InlineImage.propTypes = {
    caption: PropTypes.array,
    image: PropTypes.object,
}

export default function ImageSlice({ images }) {
    return (
        <div className={styles.imageSlice}>
            {images.map((item, index) => (
                <InlineImage
                    caption={item.image_caption}
                    image={item.image}
                    key={index}
                />
            ))}
        </div>
    )
}

ImageSlice.propTypes = {
    images: PropTypes.array,
}
