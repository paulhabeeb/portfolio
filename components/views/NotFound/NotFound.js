import PropTypes from 'prop-types'
import { Layout, PageHeader } from '@components/common'

export default function NotFound({ nav, page }) {
    const { description, meta_description, meta_title, title } = page

    return (
        <Layout nav={nav}>
            <PageHeader
                description={description}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={title}
            />
        </Layout>
    )
}

NotFound.propTypes = {
    nav: PropTypes.object,
    page: PropTypes.object,
}
