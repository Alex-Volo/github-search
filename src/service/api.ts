import type { IUserDetailed, Order, Page, SortBy } from 'types'
const baseUrl = 'https://api.github.com'

export const searchUser = async (q: string, sort?: SortBy, order?: Order, page?: Page) => {
  try {
    const searchUrl = new URL('/search/users', baseUrl)
    const defSort = sort ? '&sort=' + String(sort) : ''
    const defOrder = order ? String(order) : 'desc'
    const defPage = page ? String(page) : '1'

    const response = await fetch(`${searchUrl.href}?q=${q}${defSort}&order=${defOrder}&page=${defPage}`).then((res) =>
      res.json()
    )

    if (response.message) throw new Error(response.message)

    return response
  } catch (error) {
    if (error instanceof Error) {
      throw new TypeError(error.message)
    }
  }
}

export const getUser = async (username: string): Promise<IUserDetailed | undefined> => {
  try {
    const getUserUrl = new URL('/users', baseUrl)
    const response = await fetch(getUserUrl + `/${username}`).then((res) => res.json())
    if (response.message) throw new Error(response.message)

    // const octokit = new Octokit()
    // const response = (await octokit.request(`GET /users/${username}`, {
    //   'X-GitHub-Api-Version': '2022-11-28'
    // })) as unknown
    // if (!response) throw new Error('Нет сети')
    return response as IUserDetailed
  } catch (error) {
    if (error instanceof Error) {
      throw new TypeError(error.message)
    }
  }
}
