import { IUser, User } from '@/entities'
import { makeAutoObservable } from 'mobx'

type IStates = {
  user: IUser
  token: number
}
class UserStore implements IStates {
  public user: IUser
  public token: number

  constructor() {
    makeAutoObservable(this)
    this.user = this.getInitUser()
    this.token = this.getInitToken()
  }

  setUser(user: IUser): void {
    this.user = user
    this.token = user.id
  }

  get emailAndId() {
    return `${this.user.email}(ID : ${this.user.id})`
  }

  private getInitUser(): IUser {
    return new User({
      name: '',
      email: '',
      id: -1,
      phone: ''
    })
  }

  private getInitToken(): number {
    return -1
  }
}

export default UserStore
