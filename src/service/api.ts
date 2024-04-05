import { Octokit } from 'octokit'
import type { IResponseUserDetailed, Order, Page, SortBy } from 'types'

export const searchUser = async (q: string, sort?: SortBy, order?: Order, page?: Page) => {
  try {
    const octokit = new Octokit()

    return await octokit.request('GET /search/users', {
      q,
      sort,
      order,
      page,
      'X-GitHub-Api-Version': '2022-11-28'
    })
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message)
    }
  }
}

export const getUser = async (username: string): Promise<IResponseUserDetailed | undefined> => {
  try {
    const octokit = new Octokit()
    const response = (await octokit.request(`GET /users/${username}`, {
      'X-GitHub-Api-Version': '2022-11-28'
    })) as unknown
    return response as IResponseUserDetailed
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error)
    }
  }
}
