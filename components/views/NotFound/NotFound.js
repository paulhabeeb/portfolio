import PropTypes from 'prop-types'
import { Container, PageHeader } from '@components/common'

export default function NotFound({ nav, page }) {
    const { description, meta_description, meta_title, title } = page

    return (
        <Container
            metaDescription={meta_description}
            metaTitle={meta_title}
            nav={nav}
        >
            <PageHeader description={description} title={title} />
        </Container>
    )
}

NotFound.propTypes = {
    nav: PropTypes.array,
    page: PropTypes.object,
}
