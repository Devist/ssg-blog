import { ICommentData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { CommentAPI } from '@/network/apis/CommentAPI'
import { ICommentsRepository } from './comments.types'

export class CommentsRepository implements ICommentsRepository {
  async fetchItems(postID: number): Promise<ICommentData[]> {
    return await APIClient.shared.request(new CommentAPI.FetchAll(postID))
  }

  async saveItem(postID: number, params: ICommentData): Promise<ICommentData> {
    return await APIClient.shared.request(new CommentAPI.Create(postID, params))
  }
}
