import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { linkResolver } from '@utils/link-resolver'

import { Layout, Nav } from '@components/common'

export default function Container({
    children,
    doc,
    metaDescription,
    metaTitle,
    nav,
}) {
    const canonical = doc && linkResolver(doc)

    return (
        <>
            <NextSeo
                title={metaTitle}
                description={metaDescription}
                openGraph={{
                    url: `https://portfolio.paulhabeeb.com${canonical}`,
                    title: metaTitle,
                }}
            />
            {nav && <Nav nav={nav} />}
            <Layout>{children}</Layout>
        </>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    doc: PropTypes.object,
    metaDescription: PropTypes.string,
    metaTitle: PropTypes.string,
    nav: PropTypes.array,
}
