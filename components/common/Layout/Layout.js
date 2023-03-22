import PropTypes from 'prop-types'

import { Nav } from '@components/common'
import styles from './Layout.module.scss'

export default function Layout({ children, nav }) {
    return (
        <>
            {nav && <Nav nav={nav} />}
            <div className={styles.container}>{children}</div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    nav: PropTypes.object,
}
