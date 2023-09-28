import { fetchHygraphQuery } from './fetchHygraphQuery'

export function getPostBySlug(slug: string) {
  const query = `
    query MyQuery {
      post(where: {slug: "${slug}"}) {
        title
        date
        body {
          raw
        }
      }
    }  
  `

  return fetchHygraphQuery(
    query
  )
}