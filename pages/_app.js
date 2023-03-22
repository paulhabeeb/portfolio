import PropTypes from 'prop-types'
import Link from 'next/link'

import { linkResolver } from '@utils/link-resolver'
import { Client } from '@utils/prismic'
import { PrismicProvider } from '@prismicio/react'

import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <PrismicProvider
            client={Client}
            linkResolver={linkResolver}
            internalLinkComponent={({ href, children, ...props }) => (
                <Link href={href} {...props}>
                    {children}
                </Link>
            )}
            externalLinkComponent={props => <a {...props} />} // eslint-disable-line jsx-a11y/anchor-has-content
        >
            <Component {...pageProps} />
        </PrismicProvider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
}
