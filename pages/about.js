import { getNav, getSingleton } from '@utils/prismic'
import { About } from '@components/views'

export default function AboutPage(props) {
    return <About {...props} />
}

export async function getStaticProps({ preview = false }) {
    const navData = await getNav(preview)
    const page = await getSingleton(preview, 'about')

    return {
        props: {
            nav: navData.data.nav,
            page,
            preview,
        },
    }
}
