import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchMore(): Promise<void>
  fetchOne(postID: number): Promise<[IPost, IComment[]]>

  getPosts(): IPost[]
  getComments(): IComment[] | undefined
}

export interface IPostsServiceMock {
  getPagination(): IPaginationRequest
}
