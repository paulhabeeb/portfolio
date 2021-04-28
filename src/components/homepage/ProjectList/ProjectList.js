import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import * as styles from './ProjectList.module.scss'

function ProjectListItem({ name, url }) {
    return (
        <li className={styles.project}>
            <Link to={url}>
                <h2>{RichText.asText(name.raw)}</h2>
            </Link>
        </li>
    )
}

ProjectListItem.propTypes = {
    name: PropTypes.object,
    url: PropTypes.string,
}

export default function ProjectList({ projects }) {
    return (
        <div className={styles.projectList}>
            <h2 className={styles.title}>Selected Projects</h2>
            <ul>
                {projects.map(project => {
                    const {
                        document: { data },
                        uid,
                    } = project.primary.project

                    return (
                        <ProjectListItem
                            name={data.name}
                            url={uid}
                            key={project.id}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array,
}
