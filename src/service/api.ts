import { Octokit } from 'octokit'
import type { IResponseUserDetailed, Order, Page, SortBy } from 'types'

export const searchUser = async (q: string, sort?: SortBy, order?: Order, page?: Page) => {
  try {
    const octokit = new Octokit()
    const response = await octokit.request('GET /search/users', {
      q,
      sort,
      order,
      page,
      'X-GitHub-Api-Version': '2022-11-28'
    })

    if (!response) throw new Error('Нет сети')

    return response
  } catch (error) {
    if (error instanceof Error) {
      throw new TypeError(error.message)
    }
  }
}

export const getUser = async (username: string): Promise<IResponseUserDetailed | undefined> => {
  try {
    const octokit = new Octokit()
    const response = (await octokit.request(`GET /users/${username}`, {
      'X-GitHub-Api-Version': '2022-11-28'
    })) as unknown
    if (!response) throw new Error('Нет сети')
    return response as IResponseUserDetailed
  } catch (error) {
    if (error instanceof Error) {
      throw new TypeError(error.message)
    }
  }
}
