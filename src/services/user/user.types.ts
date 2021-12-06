import { ILoginData, IUserData, User } from '@/entities'

export interface IUserService {
  loginUser(login: ILoginData): Promise<User>
  getUser(): IUserData
}

export interface IUserServiceMock {
  loginUser: jest.Mock<Promise<User>>
  getUser: jest.Mock<IUserData>
}
