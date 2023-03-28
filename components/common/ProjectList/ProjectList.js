import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { PrismicText } from '@prismicio/react'
import cn from 'classnames'
import { linkResolver } from '@utils/link-resolver'
import styles from './ProjectList.module.scss'

function ProjectListItem({
    description,
    name,
    showDescription,
    thumbnail,
    url,
}) {
    const projectClass = cn(styles.project, {
        [styles.showDescription]: showDescription,
    })

    return (
        <li className={projectClass}>
            <Link className={styles.projectLink} href={url}>
                <div className={styles.projectWrapper}>
                    <Image
                        alt={thumbnail?.alt}
                        className={styles.projectImage}
                        height={thumbnail?.small?.dimensions?.height}
                        src={thumbnail?.small?.url}
                        width={thumbnail?.small?.dimensions?.width}
                    />
                    <div className={styles.projectCaption}>
                        <h2 className={styles.projectTitle}>
                            <PrismicText field={name} />
                        </h2>
                        {showDescription && (
                            <p>
                                <PrismicText field={description} />
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </li>
    )
}

ProjectListItem.propTypes = {
    description: PropTypes.array,
    name: PropTypes.array,
    showDescription: PropTypes.bool,
    thumbnail: PropTypes.object,
    url: PropTypes.string,
}

export default function ProjectList({ projects, showDescription }) {
    const projectListClass = cn(styles.projectList, {
        [styles.showDescription]: showDescription,
    })

    return (
        <div>
            {!showDescription && (
                <h2 className={styles.title}>Selected Projects</h2>
            )}
            <ul className={projectListClass}>
                {projects.map(project => (
                    <ProjectListItem
                        description={project.data.description}
                        name={project.data.name}
                        showDescription={showDescription}
                        thumbnail={project.data.thumbnail}
                        url={linkResolver(project)}
                        key={project.id}
                    />
                ))}
            </ul>
        </div>
    )
}

ProjectList.defaultProps = {
    showDescription: false,
}

ProjectList.propTypes = {
    projects: PropTypes.array,
    showDescription: PropTypes.bool,
}
