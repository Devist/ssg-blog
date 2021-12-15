import { fakePromise } from '@/utils/faker'
import { mockUsersData } from '@/entities'
import { IUserRepositoryMock } from './user.types'

export const mockUserRepository = (): IUserRepositoryMock => ({
  fetchItem: jest.fn().mockReturnValue(fakePromise(mockUsersData()[3])),
  saveItem: jest.fn(),
  getItem: jest.fn().mockReturnValue(mockUsersData()[3]),
  clearItem: jest.fn()
})
