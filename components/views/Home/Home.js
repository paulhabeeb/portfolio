import PropTypes from 'prop-types'

import { Container, Layout, PageHeader, ProjectList } from '@components/common'
import styles from './Home.module.scss'

export default function Home({
    data: { description, meta_description, meta_title, title },
    projects,
    type,
    uid,
}) {
    return (
        <>
            <div className={styles.container}>
                <Container
                    doc={{ type, uid }}
                    metaDescription={meta_description}
                    metaTitle={meta_title}
                >
                    <PageHeader
                        description={description}
                        title={title}
                        underlineTitle={true}
                    />
                </Container>
            </div>
            <main>
                <Layout>
                    <ProjectList projects={projects} />
                </Layout>
            </main>
        </>
    )
}

Home.propTypes = {
    data: PropTypes.object,
    projects: PropTypes.array,
    type: PropTypes.string,
    uid: PropTypes.string,
}
