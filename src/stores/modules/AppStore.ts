import { IUser, UserRoleType } from '@src/entities'
import { makeAutoObservable } from 'mobx'

type settings = {
  openTour: boolean
}

export class AppStore implements settings {
  public openTour: boolean

  constructor() {
    makeAutoObservable(this)
    this.openTour = false
  }

  public setOpenTour(open: boolean) {
    this.openTour = open
  }
}
export default new AppStore()
