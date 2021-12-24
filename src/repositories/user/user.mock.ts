import { mockUsersData } from '@/entities'
import { IUserRepositoryMock } from './user.types'

export const mockUserRepository = (): IUserRepositoryMock => ({
  fetchItem: jest.fn().mockResolvedValue(mockUsersData()[2]),
  getToken: jest.fn(),
  saveToken: jest.fn()
})
