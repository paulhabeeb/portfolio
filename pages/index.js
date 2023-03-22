import { getSingleton } from '@utils/prismic'
import { Home } from '@components/views'

export default function HomePage(props) {
    return <Home {...props} />
}

export async function getStaticProps({ preview = false }) {
    const page = await getSingleton(preview, 'homepage', {
        fetchLinks: ['project.description', 'project.name'],
    })

    return {
        props: {
            ...page,
            preview,
        },
    }
}
