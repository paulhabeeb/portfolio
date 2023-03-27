import { getNav, getByUID } from '@utils/prismic'
import { NotFound } from '@components/views'

export default function NotFoundPage(props) {
    return <NotFound {...props} />
}

export async function getStaticProps({ preview = false }) {
    const [navData, pageData] = await Promise.all([
        getNav(preview),
        getByUID(preview, 'page', 'page-not-found'),
    ])

    return {
        props: {
            nav: navData.data.nav,
            page: pageData.data,
            preview,
        },
    }
}
