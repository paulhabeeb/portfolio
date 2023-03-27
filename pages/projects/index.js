import { getAll, getByUID, getNav } from '@utils/prismic'
import { Projects } from '@components/views'

export default function ProjectsPage(props) {
    return <Projects {...props} />
}

export async function getStaticProps({ preview = false }) {
    const [navData, page, projects] = await Promise.all([
        getNav(preview),
        getByUID(preview, 'page', 'projects'),
        getAll(preview, 'project', {
            orderings: {
                field: 'my.project.name',
                direction: 'asc',
            },
        }),
    ])

    return {
        props: {
            nav: navData.data.nav,
            page,
            preview,
            projects,
        },
    }
}
