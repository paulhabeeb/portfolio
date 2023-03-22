import { getAll, getNav, getProject } from '@utils/prismic'
import { Project } from '@components/views'

export default function ProjectPage(props) {
    return <Project {...props} />
}

export async function getStaticProps({ preview = false, params }) {
    const navData = await getNav(preview)
    const page = await getProject(preview, 'project', params.uid)

    return {
        props: {
            nav: navData.data.nav,
            page,
            preview,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAll(null, 'project')
    const paths = allProjects.map(project => ({
        params: { uid: project.uid },
    }))

    return {
        paths,
        fallback: false,
    }
}
