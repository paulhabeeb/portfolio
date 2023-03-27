import PropTypes from 'prop-types'
import { Container, PageHeader } from '@components/common'

export default function Project({ nav, page }) {
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
                <article>{/* <ProjectSlices slices={body} /> */}</article>
            </main>
        </Container>
    )
}

Project.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
}
