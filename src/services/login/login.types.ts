import { ILoginData, IUserData } from '@/entities'

export interface ILoginService {
  loginUser(loginData: ILoginData): Promise<any>
  isValidEmail(loginData: ILoginData): boolean
  isValidPassword(loginData: ILoginData): boolean
}

export interface ILoginServiceMock {
  loginUser: jest.Mock<Promise<any>>
  getUser: jest.Mock<IUserData>
}
