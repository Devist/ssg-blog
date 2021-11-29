import { IUser, IUserData } from '@/entities'
import { makeAutoObservable } from 'mobx'

export class UserStore {
  private user: IUserData = {
    name: '',
    email: '',
    id: -1,
    phone: ''
  }

  constructor() {
    makeAutoObservable(this)
  }
}
export default new UserStore()
