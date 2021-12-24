import { mockCommentsData } from '@/entities'
import { ICommentsRepositoryMock } from './comments.types'

export const mockCommentsRepository = (): ICommentsRepositoryMock => ({
  fetchItems: jest.fn().mockResolvedValue(mockCommentsData()),
  saveItem: jest.fn().mockResolvedValue(mockCommentsData()[1])
})
