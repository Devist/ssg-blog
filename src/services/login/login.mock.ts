import { ILoginServiceMock } from './login.types'

export const mockUserService = (): ILoginServiceMock => ({
  loginUser: jest.fn(),
  getUser: jest.fn()
})
