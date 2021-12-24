import { IUserServiceMock } from './user.types'

export const mockUserService = (): IUserServiceMock => ({
  fetchUser: jest.fn()
})
