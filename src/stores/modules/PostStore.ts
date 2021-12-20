import { makeAutoObservable } from 'mobx'

type IStates = {
  pagination: IPaginationRequest
}
export class PostStore implements IStates {
  // *** states *****************************************
  public pagination: IPaginationRequest = { _limit: 16, _page: 1 }

  // *** init settings **********************************
  constructor() {
    makeAutoObservable(this)
  }

  // *** actions *****************************************
  public changeLimit(limitNumber: number): void {
    this.pagination = {
      _limit: limitNumber,
      _page: 1
    }
  }

  public updatePage(page: number, limit?: number): void {
    limit ? (this.pagination = { _page: page, _limit: limit }) : (this.pagination._page = page)
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
