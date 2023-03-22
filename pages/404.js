import { getNav, getSingleton } from '@utils/prismic'
import { NotFound } from '@components/views'

export default function NotFoundPage(props) {
    return <NotFound {...props} />
}

export async function getStaticProps({ preview = false }) {
    const navData = await getNav(preview)
    const pageData = await getSingleton(preview, 'page_not_found')

    return {
        props: {
            nav: navData.data.nav,
            page: pageData.data,
            preview,
        },
    }
}
