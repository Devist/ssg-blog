import { ICommentData } from '@/entities'

export type ICommentsRepository = {
  fetchItems: (postID: number) => Promise<ICommentData[]>
  saveItem: (postID: number, params: ICommentData) => Promise<ICommentData>

  getItems: () => ICommentData[] | null
  updateItems: (data: ICommentData[] | null) => void
}

export type ICommentsRepositoryMock = {
  fetchItems: jest.Mock<Promise<ICommentData[]>>
  saveItem: jest.Mock<Promise<ICommentData>>

  getItems: jest.Mock<ICommentData[] | null>
  updateItems: jest.Mock<void>
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