import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchAll(): Promise<IPost[]>
  fetchOne(): Promise<IPost>
  fetchComments(postID: number): Promise<IComment[]>
  getComments(postID: number): Promise<IComment[]>
}

export interface IPostsServiceMock {
  loginUser: jest.Mock<Promise<number>>
  isValidEmail: jest.Mock<boolean>
  isValidPassword: jest.Mock<boolean>
}
