import { IPost } from '@/entities'
import { makeAutoObservable } from 'mobx'

type IStates = {
  posts: IPost[]
  page: number
  limit: number
}

class PostsStore implements IStates {
  posts: IPost[] = []
  page = 1
  limit = 16

  constructor() {
    makeAutoObservable(this)
  }

  setPosts(posts: IPost[]) {
    this.posts.push(...posts)
  }

  init() {
    this.posts = []
    this.page = 1
  }

  setPage(page: number) {
    this.page = page
  }

  get pagination(): IPaginationRequest {
    return { _page: this.page, _limit: this.limit }
  }
}

export default PostsStore

// 함수형으로
// const PostsStore = observable<IStates>({
//   posts: [],
//   page: 0,
//   limit: 0,

//   setPosts(posts: IPost[]) {
//     posts.push(...posts)
//   }
// })

// export default PostsStore
