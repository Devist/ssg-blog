import { makeAutoObservable } from 'mobx'

type IStates = {
  openTour: boolean
  appWidth: number
}

class AppStore implements IStates {
  openTour = false
  appWidth = 0

  constructor() {
    makeAutoObservable(this)
  }

  setOpenTour(open: boolean) {
    this.openTour = open
  }
}

export default AppStore
