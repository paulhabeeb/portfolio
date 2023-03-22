import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint(process.env.PRISMIC_REPOSITORY_NAME)

export const Client = ref =>
    prismic.createClient(endpoint, {
        accessToken: process.env.PRISMIC_API_TOKEN,
        ref: ref || '',
    })

export async function getSingleton(previewData, uid, params) {
    return await Client(previewData?.ref).getSingle(uid, params)
}

export async function getNav(previewData) {
    return await getSingleton(previewData, 'nav')
}

export async function getAll(previewData, postType, params) {
    return await Client(previewData?.ref).getAllByType(postType, params)
}

export async function getProject(previewData, documentType, uid, params) {
    return await Client(previewData?.ref).getByUID(documentType, uid, params)
}
