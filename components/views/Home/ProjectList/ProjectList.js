import PropTypes from 'prop-types'
import Link from 'next/link'
import { PrismicText } from '@prismicio/react'
import { linkResolver } from '@utils/link-resolver'
import styles from './ProjectList.module.scss'

function ProjectListItem({ name, url }) {
    return (
        <li className={styles.project}>
            <Link href={url}>
                <h2>
                    <PrismicText field={name} />
                </h2>
            </Link>
        </li>
    )
}

ProjectListItem.propTypes = {
    name: PropTypes.array,
    url: PropTypes.string,
}

export default function ProjectList({ projects }) {
    return (
        <div className={styles.projectList}>
            <h2 className={styles.title}>Selected Projects</h2>
            <ul>
                {projects.map(({ primary: { project } }) => (
                    <ProjectListItem
                        name={project.data.name}
                        url={linkResolver(project)}
                        key={project.id}
                    />
                ))}
            </ul>
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array,
}
