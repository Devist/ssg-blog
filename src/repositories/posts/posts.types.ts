import { IPostData } from '@/entities'

export type IPostRepository = {
  fetchItems: (params?: IPaginationRequest) => Promise<IPostData[]>
  saveItem: (params: IPostData) => Promise<IPostData>
  getItem: (id: number) => IPostData
  clearItem: () => Promise<void>
}

export type IPostRepositoryMock = {
  fetchItems: jest.Mock<Promise<IPostData[]>>
  saveItem: jest.Mock<Promise<IPostData>>
  getItem: jest.Mock<IPostData>
  clearItem: jest.Mock<Promise<void>>
}
