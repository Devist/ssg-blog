import { IUserData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { UserAPI } from '@/network/apis/UserAPI'
import { IUserRepository } from './user.types'
import Cookies from 'js-cookie'

export class UserRepository implements IUserRepository {
  async fetchItem(id: number): Promise<IUserData> {
    return await APIClient.shared.request(new UserAPI.Fetch(id))
  }

  saveToken(token: number) {
    Cookies.set('token', token, { expires: 1 })
  }

  getToken(): number {
    return Cookies.get('token')
  }
}
