import * as React from 'react'
import PropTypes from 'prop-types'

import * as styles from './Layout.module.scss'
import { Nav } from '@components/common'

export default function Layout({ children, showNav }) {
    return (
        <>
            {showNav && <Nav />}
            <div className={styles.container}>{children}</div>
        </>
    )
}

Layout.defaultProps = {
    showNav: true,
}

Layout.propTypes = {
    children: PropTypes.node,
    showNav: PropTypes.bool,
}
