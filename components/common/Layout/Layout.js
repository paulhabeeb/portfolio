import PropTypes from 'prop-types'
import { linkResolver } from '@utils/link-resolver'

import { Nav, PageHelmet } from '@components/common'
import styles from './Layout.module.scss'

export default function Layout({
    children,
    doc,
    metaDescription,
    metaTitle,
    nav,
}) {
    return (
        <>
            <PageHelmet
                description={metaDescription}
                title={metaTitle}
                url={doc && linkResolver(doc)}
            />
            {nav && <Nav nav={nav} />}
            <div className={styles.container}>{children}</div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    doc: PropTypes.object,
    metaDescription: PropTypes.string,
    metaTitle: PropTypes.string,
    nav: PropTypes.array,
}
