import { IComment, IPost } from '@/entities'

export interface IPostsService {
  fetchMore(pagination: IPaginationRequest): Promise<IPost[]>
  fetchOne(postId: number): Promise<[IPost, IComment[]]>
  // 샘플 : api가 creteria로 내 포스트 리스트만  받아올 수 있다고 가정했을 때
  fetchMyPost(userId: number, pagination: IPaginationRequest): Promise<IPost[]>

  // 샘플 : 한 번에 받아온 포스트 리스트에서 프론트엔드에서 필터링하는 상황을 가정할 때
  getMyPost(posts: IPost[], userId: number): IPost[]
}

export interface IPostsServiceMock {
  fetchMore: jest.Mock<Promise<IPost[]>>
  fetchOne: jest.Mock<Promise<[IPost, IComment[]]>>
  fetchMyPost: jest.Mock<Promise<IPost[]>>
  getMyPost: jest.Mock<IPost[]>
}
