import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest'
import { HTTPMethod } from '@/network/APIClient'
import { IPostData } from '@/entities'

export namespace PostAPI {
  // 베이스
  const POSTS = 'posts'

  /**
   * 포스트 리스트 가져오기 ============== GET /posts ================
   * ex1) /posts - no pagination : fetch all
   * ex2) /posts?_page=7&_limit=4 - pagination : fetch 4 datas in 7 pages
   */
  export class FetchAll implements APIRequest<IPostData[]> {
    response!: IPostData[]
    path = POSTS
    params?: IPaginationRequest
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(params?: IPaginationRequest) {
      if (params) this.params = params
    }
  }

  /**
   * 포스트 가져오기 ================== GET /posts/{postID} =================
   */
  export class FetchOne implements APIRequest<IPostData> {
    response!: IPostData
    path = POSTS
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(postID: number) {
      this.path = this.path.concat(`/${postID}`)
    }
  }

  /**
   * 포스트 생성하기 =============== POST /posts =============================
   * body : IPostData
   */
  export class Create implements APIRequest<IPostData> {
    response!: IPostData
    path = POSTS
    method = HTTPMethod.POST
    params: IPostData
    parse = (data: AxiosResponse) => data.data
    constructor(params: IPostData) {
      this.params = params
    }
  }

  /**
   * 포스트 수정하기  ================= PATCH  /posts/{postID} =====================
   */
  export class Update implements APIRequest<IPostData> {
    response!: IPostData
    path = POSTS
    method = HTTPMethod.PATCH
    params: IPostData
    parse = (data: AxiosResponse) => data.data
    constructor(params: IPostData) {
      this.path = this.path.concat(`/${params.id}`)
      this.params = params
    }
  }

  /**
   * 포스트 삭제하기 ================== DELETE /posts/{postID}
   */
  export class Delete implements APIRequest<null> {
    response!: null
    path = POSTS
    method = HTTPMethod.DELETE
    parse = (data: AxiosResponse) => data.data
    constructor(postId: number) {
      this.path = this.path.concat(`/${postId}`)
    }
  }
}
