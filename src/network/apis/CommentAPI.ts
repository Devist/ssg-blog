import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest'
import { HTTPMethod } from '@/network/APIClient'
import { ICommentData } from '../../entities/comment/comment.types'

export namespace CommentAPI {
  // 베이스
  const POSTS = 'posts'
  const COMMENTS = 'comments'

  export class FetchAll implements APIRequest<ICommentData[]> {
    response!: ICommentData[]
    path: string
    params?: IPaginationRequest
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(postId: number, params?: IPaginationRequest) {
      this.path = `${POSTS}/${postId}/${COMMENTS}`
      if (params) this.params = params
    }
  }

  export class Create implements APIRequest<ICommentData> {
    response!: ICommentData
    path: string
    method = HTTPMethod.GET
    params: ICommentData
    parse = (data: AxiosResponse) => data.data
    constructor(postId: number, params: ICommentData) {
      this.path = `${POSTS}/${postId}/${COMMENTS}`
      this.params = params
    }
  }

  export class Delete implements APIRequest<null> {
    response!: null
    path: string
    method = HTTPMethod.DELETE
    parse = (data: AxiosResponse) => data.data
    constructor(commentId: number) {
      this.path = `${COMMENTS}/${commentId}`
    }
  }
}
