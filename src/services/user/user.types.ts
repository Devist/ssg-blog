import { IUserData } from '@/entities'

export interface IUserService {
  fetchUser(userId: number): Promise<IUserData>
}

export interface IUserServiceMock {
  fetchUser(): Promise<IUserData>
}
