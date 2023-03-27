import PropTypes from 'prop-types'
import { Layout, PageHeader } from '@components/common'

export default function Project({ nav, page }) {
    const {
        data: { description, meta_description, meta_title, title },
        type,
        uid,
    } = page

    return (
        <Layout
            doc={{ type, uid }}
            metaDescription={meta_description}
            metaTitle={meta_title}
            nav={nav}
        >
            <PageHeader description={description} title={title} />

            <main>
                <article>{/* <ProjectSlices slices={body} /> */}</article>
            </main>
        </Layout>
    )
}

Project.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
}
