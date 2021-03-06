import { IPostData } from '@/entities'

export type IPostsRepository = {
  fetchItem: (postId: number) => Promise<IPostData>
  fetchItems: (params?: IPaginationRequest) => Promise<IPostData[]>
  saveItem: (params: IPostData) => Promise<IPostData>
  clearItem: (postId: number) => Promise<void>
}

export type IPostsRepositoryMock = {
  fetchItem: jest.Mock<Promise<IPostData>>
  fetchItems: jest.Mock<Promise<IPostData[]>>
  saveItem: jest.Mock<Promise<IPostData>>
  clearItem: jest.Mock<Promise<void>>
}

// 참조용
// 순서 유지

// export type IBaseRepository = {
//   fetchItem?: (id: number) => Promise<any>
//   fetchItems?: (params?: any) => Promise<any>
//   saveItem?: (params: any) => Promise<void> | void
//   saveItems?: (params: any) => Promise<void> | void
//   getItem?: () => any
//   getItems?: () => any
//   clearItem?: () => Promise<void>
//   clearItems?: () => Promise<void>
// }

// export type IBaseRepositoryMock = {
//   fetchItem?: jest.Mock<Promise<any>>
//   fetchItems?: jest.Mock<Promise<any>>
//   saveItem?: jest.Mock<Promise<any> | void>
//   saveItems?: jest.Mock<Promise<any> | void>
//   getItem?: jest.Mock<any>
//   getItems?: jest.Mock<any>
//   clearItem?: jest.Mock<Promise<any>>
//   clearItems?: jest.Mock<Promise<any>>
// }
