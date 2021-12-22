import { ICommentData, IPostData } from '@/entities'
import { makeAutoObservable } from 'mobx'

type IStates = {
  pagination: IPaginationRequest
}
export class PostStore implements IStates {
  // *** states *****************************************
  public pagination: IPaginationRequest = { _limit: 16, _page: 0 }
  public posts: IPostData[] | [] = []
  public currentPost: IPostData | null = null
  public currentComments: ICommentData[] | null = null

  // *** init settings **********************************
  constructor() {
    makeAutoObservable(this)
  }

  // *** actions *****************************************
  public changePageLimit(limitNumber: number): void {
    this.pagination = {
      _limit: limitNumber,
      _page: 1
    }
  }

  public updatePage(pagination: IPaginationRequest): void {
    this.pagination = pagination
  }

  public addPosts(posts: IPostData[]) {
    this.posts = [...this.posts, ...posts]
  }

  public setCurrentPost(post: IPostData) {
    this.currentPost = post
  }

  public setCurrentComments(comments: ICommentData[]) {
    this.currentComments = comments
  }

  public initCurrent() {
    this.currentPost = null
    this.currentComments = null
  }

  // *** computed ****************************************
  get limit(): number {
    return this.pagination._limit
  }

  get page(): number {
    return this.pagination._page
  }
}

export default PostStore
