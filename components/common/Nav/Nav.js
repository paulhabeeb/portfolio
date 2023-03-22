import PropTypes from 'prop-types'
import Link from 'next/link'
import { linkResolver } from '@utils/link-resolver'

import cn from 'classnames'
import styles from './Nav.module.scss'

function NavItem({ hasPlainStyling, link, linkText }) {
    const className = cn(styles.navItem, {
        [styles.plainLink]: hasPlainStyling,
    })

    if (link.uid) {
        return (
            <li className={className}>
                <Link
                    activeClassName={styles.activeLink}
                    href={linkResolver(link)}
                >
                    {linkText}
                </Link>
            </li>
        )
    }

    return <li className={className}>{linkText}</li>
}

NavItem.propTypes = {
    hasPlainStyling: PropTypes.bool,
    link: PropTypes.object,
    linkText: PropTypes.string,
}

export default function Nav({ nav }) {
    return (
        <nav className={styles.nav}>
            <ul>
                {nav.map((item, index) => (
                    <NavItem
                        hasPlainStyling={item.has_plain_styling}
                        link={item.link}
                        linkText={item.link_text}
                        key={index}
                    />
                ))}
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    nav: PropTypes.array,
}
