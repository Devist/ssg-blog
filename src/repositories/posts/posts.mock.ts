import { mockPostsData } from '@/entities'
import { IPostRepositoryMock } from './posts.types'

export const mockPostRepository = (): IPostRepositoryMock => ({
  fetchItems: jest.fn().mockResolvedValue(mockPostsData()),
  saveItem: jest.fn(),
  getItem: jest.fn().mockResolvedValue(mockPostsData()[2]),
  clearItem: jest.fn().mockResolvedValue(null)
})
