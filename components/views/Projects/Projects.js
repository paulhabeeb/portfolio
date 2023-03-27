import PropTypes from 'prop-types'
import { Container, PageHeader, ProjectList } from '@components/common'

export default function Projects({ nav, page, projects }) {
    const {
        data: { description, meta_description, meta_title, title },
        type,
        uid,
    } = page

    return (
        <Container
            doc={{ type, uid }}
            metaDescription={meta_description}
            metaTitle={meta_title}
            nav={nav}
        >
            <PageHeader description={description} title={title} />
            <main>
                <article>
                    <ProjectList projects={projects} showDescription={true} />
                </article>
            </main>
        </Container>
    )
}

Projects.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
    projects: PropTypes.array,
}
