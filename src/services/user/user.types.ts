import { IUser, IUserData } from '@/entities'

export interface IUserService {
  getUser(): IUser
}

export interface IUserServiceMock {
  getUser: jest.Mock<IUserData>
}
