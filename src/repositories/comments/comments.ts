import { ICommentData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { CommentAPI } from '@/network/apis/CommentAPI'
import { PostAPI } from '@/network/apis/PostAPI'
import { useStores } from '@/stores'
import { ICommentsRepository } from './comments.types'

export class CommentsRepository implements ICommentsRepository {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  constructor(private readonly postStore = useStores().postStore) {}

  async fetchItems(postID: number): Promise<ICommentData[]> {
    return await APIClient.shared.request(new CommentAPI.FetchAll(postID))
  }

  async saveItem(postID: number, params: ICommentData): Promise<ICommentData> {
    return await APIClient.shared.request(new CommentAPI.Create(postID, params))
  }

  getItems(): ICommentData[] | null {
    return this.postStore.currentComments
  }

  updateItems(data: ICommentData[]) {
    this.postStore.currentComments = data
  }
}
