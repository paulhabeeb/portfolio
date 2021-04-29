import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PageHeader } from '@components/common'
import { BuiltWith, HeaderLinks, ProjectSlices } from '@components/project'

export default function Project({ data }) {
    const {
        body,
        built_with,
        description,
        github_button_text,
        github_link,
        live_button_text,
        live_link,
        meta_description,
        meta_title,
        name,
    } = data.prismicProject.data

    return (
        <Layout>
            <PageHeader
                description={description}
                doc={{
                    type: data.prismicProject.type,
                    uid: data.prismicProject.uid,
                }}
                metaDescription={meta_description}
                metaTitle={meta_title}
                title={name}
            >
                <HeaderLinks
                    githubButtonText={github_button_text}
                    githubLink={github_link}
                    liveButtonText={live_button_text}
                    liveLink={live_link}
                />
                <BuiltWith tools={built_with} />
            </PageHeader>
            <main>
                <article>
                    <ProjectSlices slices={body} />
                </article>
            </main>
        </Layout>
    )
}

Project.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query ProjectPageQuery($uid: String!) {
        prismicProject(uid: { eq: $uid }) {
            data {
                body {
                    ... on PrismicProjectBodyText {
                        id
                        primary {
                            text_body {
                                raw
                            }
                        }
                        slice_type
                    }
                    ... on PrismicProjectBodyImage {
                        id
                        items {
                            image {
                                alt
                                dimensions {
                                    ...ImageDimensionsFragment
                                }
                                url
                                thumbnails {
                                    xl {
                                        ...ThumbnailFragment
                                    }
                                    l {
                                        ...ThumbnailFragment
                                    }
                                    m {
                                        ...ThumbnailFragment
                                    }
                                    s {
                                        ...ThumbnailFragment
                                    }
                                    xs {
                                        ...ThumbnailFragment
                                    }
                                }
                            }
                            image_caption {
                                raw
                            }
                        }
                        slice_type
                    }
                }
                built_with {
                    raw
                }
                description {
                    raw
                }
                github_button_text
                github_link {
                    link_type
                    url
                }
                live_button_text
                live_link {
                    link_type
                    url
                }
                meta_description
                meta_title
                name {
                    raw
                }
            }
            type
            uid
        }
    }

    fragment ImageDimensionsFragment on PrismicImageDimensionsType {
        height
        width
    }

    fragment ThumbnailFragment on PrismicImageThumbnailType {
        url
        dimensions {
            ...ImageDimensionsFragment
        }
    }
`
