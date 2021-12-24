import { IUser } from '@/entities'

export interface IUserService {
  fetchUser(userId: number): Promise<IUser>
}

export interface IUserServiceMock {
  fetchUser(): Promise<IUser>
}
