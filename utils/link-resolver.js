export function linkResolver(doc) {
    if (doc.type === 'project') {
        return `/projects/${doc.uid}`
    }
    if (doc.type === 'about') {
        return `/${doc.uid}`
    }

    // Default to homepage
    return '/'
}
