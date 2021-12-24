import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchMore(pagination: IPaginationRequest): Promise<IPost[]>
  fetchOne(postID: number): Promise<[IPost, IComment[]]>
}

export interface IPostsServiceMock {
  getPagination(): IPaginationRequest
}
