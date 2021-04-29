import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export default function PageHelmet({ description, title, url }) {
    return (
        <Helmet>
            <html lang='en' />

            {/* General tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link key='icon' rel='icon' href='/favicon.png' />

            {/* OpenGraph tags */}
            <meta
                property='og:url'
                content={`https://portfolio.paulhabeeb.com${url}`}
            />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />

            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content='paulhabeeb' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
        </Helmet>
    )
}

PageHelmet.defaultProps = {
    description: '',
    title: '',
    url: '',
}

PageHelmet.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}
