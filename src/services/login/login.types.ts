import { ILoginData, IUser, IUserData } from '@/entities'

export interface ILoginService {
  loginUser(loginData: ILoginData): Promise<IUser>
  isValidEmail(loginData: ILoginData): boolean
  isValidPassword(loginData: ILoginData): boolean
}

export interface ILoginServiceMock {
  loginUser: jest.Mock<Promise<IUser>>
  isValidEmail: jest.Mock<boolean>
  isValidPassword: jest.Mock<boolean>
}
