import { mockPostsData } from '@/entities'
import { IPostsRepositoryMock } from './posts.types'

export const mockPostRepository = (): IPostsRepositoryMock => ({
  fetchItems: jest.fn().mockResolvedValue(mockPostsData()),
  fetchItem: jest.fn().mockResolvedValue(mockPostsData()[1]),
  saveItem: jest.fn().mockResolvedValue(mockPostsData()[1]),
  clearItem: jest.fn().mockResolvedValue(null),

  getPagination: jest.fn().mockReturnValue({ _limit: 12, page: 1 })
})
