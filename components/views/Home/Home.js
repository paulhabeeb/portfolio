import PropTypes from 'prop-types'

import { Layout, PageHeader } from '@components/common'
import ProjectList from './ProjectList'
import styles from './Home.module.scss'

export default function Home({
    data: { body, description, meta_description, meta_title, title },
    type,
    uid,
}) {
    return (
        <>
            <div className={styles.container}>
                <Layout
                    doc={{ type, uid }}
                    metaDescription={meta_description}
                    metaTitle={meta_title}
                >
                    <PageHeader
                        description={description}
                        title={title}
                        underlineTitle={true}
                    />
                </Layout>
            </div>
            <main>
                <Layout>
                    <ProjectList projects={body} />
                </Layout>
            </main>
        </>
    )
}

Home.propTypes = {
    data: PropTypes.object,
    type: PropTypes.string,
    uid: PropTypes.string,
}
