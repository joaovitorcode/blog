import { fetchHygraphQuery } from './fetchHygraphQuery'

export function getPosts() {
  const query = `
    query MyQuery {
      posts {
        slug
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