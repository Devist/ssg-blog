import { IUserServiceMock } from './user.types'

export const mockUserService = (): IUserServiceMock => ({
  getUser: jest.fn()
})
