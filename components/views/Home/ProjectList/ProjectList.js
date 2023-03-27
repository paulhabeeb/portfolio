import PropTypes from 'prop-types'
import Link from 'next/link'
import { PrismicText } from '@prismicio/react'
import { linkResolver } from '@utils/link-resolver'
import styles from './ProjectList.module.scss'

function ProjectListItem({ name, thumbnail, url }) {
    return (
        <li className={styles.project}>
            <Link href={url}>
                <img
                    alt={thumbnail?.alt}
                    className={styles.projectImage}
                    height={thumbnail?.small?.dimensions?.height}
                    src={thumbnail?.small?.url}
                    width={thumbnail?.small?.dimensions?.width}
                />
                <h2>
                    <PrismicText field={name} />
                </h2>
            </Link>
        </li>
    )
}

ProjectListItem.propTypes = {
    name: PropTypes.array,
    thumbnail: PropTypes.object,
    url: PropTypes.string,
}

export default function ProjectList({ projects }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Selected Projects</h2>
            <ul className={styles.projectList}>
                {projects.map(({ primary: { project } }) => (
                    <ProjectListItem
                        name={project.data.name}
                        thumbnail={project.data.thumbnail}
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
