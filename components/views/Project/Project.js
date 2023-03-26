import PropTypes from 'prop-types'
import { Layout, PageHeader } from '@components/common'
import BuiltWith from './BuiltWith'
import HeaderLinks from './HeaderLinks'
import ProjectSlices from './ProjectSlices'

export default function Project({ nav, page }) {
    const {
        data: {
            body,
            built_with,
            description,
            github_button_text,
            github_link,
            live_button_text,
            live_link,
            meta_description,
            meta_title,
            name,
        },
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
            <PageHeader description={description} title={name}>
                <HeaderLinks
                    githubButtonText={github_button_text}
                    githubLink={github_link}
                    liveButtonText={live_button_text}
                    liveLink={live_link}
                />
                <BuiltWith tools={built_with} />
            </PageHeader>
            <main>
                <article>
                    <ProjectSlices slices={body} />
                </article>
            </main>
        </Layout>
    )
}

Project.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
}
