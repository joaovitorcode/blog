import { fetchHygraphQuery } from './fetchHygraphQuery'

export function getPages() {
  const query = `
    query MyQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
      }
    }  
  `

  return fetchHygraphQuery(
    query
  )
}