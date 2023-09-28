import { fetchHygraphQuery } from './fetchHygraphQuery'

export function getProjects() {
  const query = `
    query MyQuery {
      projects {
        title
        tag
        link
        description
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(
    query
  )
}