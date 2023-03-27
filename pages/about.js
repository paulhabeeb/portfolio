import { getNav, getByUID } from '@utils/prismic'
import { About } from '@components/views'

export default function AboutPage(props) {
    return <About {...props} />
}

export async function getStaticProps({ preview = false }) {
    const [navData, page] = await Promise.all([
        getNav(preview),
        getByUID(preview, 'page', 'about'),
    ])

    return {
        props: {
            nav: navData.data.nav,
            page,
            preview,
        },
    }
}
