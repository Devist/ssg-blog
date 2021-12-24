import { IUserData } from '@/entities'

export type IUserRepository = {
  fetchItem: (id: number) => Promise<IUserData>
  getToken: () => number
  saveToken: (token: number) => void
}

export type IUserRepositoryMock = {
  fetchItem: jest.Mock<Promise<IUserData>>
  getToken: jest.Mock<number>
  saveToken: jest.Mock<void>
}
