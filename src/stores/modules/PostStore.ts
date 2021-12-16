import { IPostData } from '@/entities'
import { makeAutoObservable } from 'mobx'

type IStates = {
  posts: IPostData[] | null
}
export class PostStore implements IStates {
  // *** states *****************************************
  public posts: IPostData[] | null = null

  // *** init settings **********************************
  constructor() {
    makeAutoObservable(this)
  }
}

export default PostStore
