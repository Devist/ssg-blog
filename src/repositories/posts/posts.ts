import { IPostData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { PostAPI } from '@/network/apis/PostAPI'
import { useStores } from '@/stores'
import { IPostsRepository } from './posts.types'
export class PostsRepository implements IPostsRepository {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  constructor(private readonly postStore = useStores().postStore) {}

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

  getItems(): IPostData[] {
    return this.postStore.posts
  }

  addPosts(posts: IPostData[]): void {
    this.postStore.addPosts(posts)
  }

  getPagination(): IPaginationRequest {
    return this.postStore.pagination
  }

  updatePagination(pagination: IPaginationRequest): void {
    this.postStore.updatePage(pagination)
  }
}
