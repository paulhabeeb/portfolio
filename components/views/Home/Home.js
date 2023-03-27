import PropTypes from 'prop-types'

import { Container, Layout, PageHeader } from '@components/common'
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
