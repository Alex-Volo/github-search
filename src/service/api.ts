import { Octokit } from 'octokit'

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  received_events_url: string
  type: string
  score: number
  following_url: string
  gists_url: string
  starred_url: string
  events_url: string
  public_repos?: number | undefined
  public_gists?: number | undefined
  followers?: number | undefined
  following?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | null | undefined
  bio?: string | null | undefined
  email?: string | null | undefined
  location?: string | null | undefined
  site_admin: boolean
  hireable?: boolean | null | undefined
  text_matches?:
    | {
        object_url?: string | undefined
        object_type?: string | null | undefined
        property?: string | undefined
        fragment?: string | undefined
        matches?:
          | {
              text?: string | undefined
              indices?: number[] | undefined
            }[]
          | undefined
      }[]
    | undefined
  blog?: string | null | undefined
  company?: string | null | undefined
  suspended_at?: string | null | undefined
}

interface IUserDetailed {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface IResponseUserDetailed {
  data: IUserDetailed
  headers: Record<string, string>
  status: number
  url: string
}

// interface IResponseSearchUserData {
//   incomplete_results: boolean
//   items: IUser[]
//   total_count: number
// }

// interface IResponseSearchUser {
//   data: IResponseSearchUserData

//   headers: Record<string, string>

//   status: number

//   url: string
// }

export const searchUser = async (q: string) => {
  try {
    const octokit = new Octokit()
    return octokit.request('GET /search/users', {
      q,
      'X-GitHub-Api-Version': '2022-11-28'
    })
  } catch (error) {
    console.warn(error)
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
    console.warn(error)
  }
}
