import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchAll(): Promise<IPost[]>
  fetchOne(postID: number): Promise<[IPost, IComment[]]>

  getComments(): IComment[] | undefined
  getPagination(): IPaginationRequest
}

export interface IPostsServiceMock {
  loginUser: jest.Mock<Promise<number>>
  isValidEmail: jest.Mock<boolean>
  isValidPassword: jest.Mock<boolean>

  getPagination(): IPaginationRequest
}
