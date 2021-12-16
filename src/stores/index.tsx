import React from 'react'

import { AppStore } from './modules/AppStore'
import PostStore from './modules/PostStore'
import { UserStore } from './modules/UserStore'

export default class RootStore {
  appStore
  userStore
  postStore

  constructor() {
    this.appStore = new AppStore()
    this.userStore = new UserStore()
    this.postStore = new PostStore()
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext)
