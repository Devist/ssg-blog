import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchAll(): Promise<IPost[]>
  fetchOne(): Promise<IPost>
  fetchComments(postID: number): Promise<IComment[]>
  getComments(postID: number): Promise<IComment[]>

  getPagination(): IPaginationRequest
}

export interface IPostsServiceMock {
  loginUser: jest.Mock<Promise<number>>
  isValidEmail: jest.Mock<boolean>
  isValidPassword: jest.Mock<boolean>

  getPagination(): IPaginationRequest
}
