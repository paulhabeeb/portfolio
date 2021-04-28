import * as React from 'react'
import { Link } from 'gatsby'

export function prismicLink(doc) {
    if (doc.type === 'about' || doc.type === 'project') return `/${doc.uid}`

    // Default to homepage
    return '/'
}

export function linkResolver(type, element, content, children, index) {
    if (element.data.link_type === 'Web') {
        return (
            <a href={element.data.url} key={index}>
                {content}
            </a>
        )
    }

    return (
        <Link to={prismicLink(element.data)} key={element.data.id}>
            {content}
        </Link>
    )
}
