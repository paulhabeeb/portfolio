import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { prismicLink } from '@utils/link-resolver'

import cn from 'classnames'
import * as styles from './Nav.module.scss'

function NavItem({ hasPlainStyling, link, linkText }) {
    const className = cn(styles.navItem, {
        [styles.plainLink]: hasPlainStyling,
    })

    if (link.uid) {
        return (
            <li className={className}>
                <Link to={prismicLink(link)}>{linkText}</Link>
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

export default function Nav() {
    const {
        prismicNav: {
            data: { nav },
        },
    } = useStaticQuery(
        graphql`
            query NavQuery {
                prismicNav(uid: { eq: "site-nav" }) {
                    data {
                        nav {
                            has_plain_styling
                            link {
                                uid
                                type
                            }
                            link_text
                        }
                    }
                }
            }
        `
    )

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
