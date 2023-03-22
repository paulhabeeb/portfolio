import PropTypes from 'prop-types'

import { Layout, PageHeader } from '@components/common'
import ProjectList from './ProjectList'

export default function Home({
    data: { body, description, meta_description, meta_title, title },
    type,
    uid,
}) {
    return (
        <Layout showNav={false}>
            <PageHeader
                description={description}
                doc={{
                    type,
                    uid,
                }}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={title}
            />
            <main>
                <ProjectList projects={body} />
            </main>
        </Layout>
    )
}

Home.propTypes = {
    data: PropTypes.object,
    type: PropTypes.string,
    uid: PropTypes.string,
}
