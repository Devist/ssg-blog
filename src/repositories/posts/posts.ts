import { IPostData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { PostAPI } from '@/network/apis/PostAPI'

import { IPostsRepository } from './posts.types'
export class PostsRepository implements IPostsRepository {
  async fetchItem(postID: number): Promise<IPostData> {
    return await APIClient.shared.request(new PostAPI.FetchOne(postID))
  }

  async fetchItems(params?: IPaginationRequest | undefined): Promise<IPostData[]> {
    return await APIClient.shared.request(new PostAPI.FetchAll(params))
  }

  async saveItem(params: IPostData): Promise<IPostData> {
    if (params.id) return await APIClient.shared.request(new PostAPI.Update(params))
    return await APIClient.shared.request(new PostAPI.Create(params))
  }

  async clearItem(postID: number): Promise<void> {
    return await APIClient.shared.request(new PostAPI.Delete(postID))
  }
}
