import * as React from 'react'
import PropTypes from 'prop-types'

import * as styles from './HeaderLinks.module.scss'
import GitHubIcon from '@images/github.inline.svg'

export default function HeaderLinks({
    githubButtonText,
    githubLink,
    liveButtonText,
    liveLink,
}) {
    return (
        <ul className={styles.links}>
            {liveLink.url && (
                <li>
                    <a href={liveLink.url}>
                        {liveButtonText} {String.fromCharCode(8599)}
                    </a>
                </li>
            )}
            {githubLink.url && (
                <li>
                    <a href={githubLink.url}>
                        {githubButtonText}
                        <GitHubIcon className={styles.icon} />
                    </a>
                </li>
            )}
        </ul>
    )
}

HeaderLinks.propTypes = {
    githubButtonText: PropTypes.string,
    githubLink: PropTypes.object,
    liveButtonText: PropTypes.string,
    liveLink: PropTypes.object,
}
