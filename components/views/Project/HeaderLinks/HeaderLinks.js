import PropTypes from 'prop-types'

import { GitHub, NewTab } from '@components/icons'
import styles from './HeaderLinks.module.scss'

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
                    <a href={liveLink.url} target='_blank' rel='noreferrer'>
                        {liveButtonText} <NewTab styles={styles.icon} />
                    </a>
                </li>
            )}
            {githubLink.url && (
                <li>
                    <a href={githubLink.url} target='_blank' rel='noreferrer'>
                        {githubButtonText}
                        <GitHub styles={styles.icon} />
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
