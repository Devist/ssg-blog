import { IComment, IPost } from '@/entities'
import { ROLES } from '@/ui/acl/permission-maps'
import { makeAutoObservable } from 'mobx'
import RootStore from '..'

type IStates = {
  post: IPost | null
  comments: IComment[]
  userRole: ROLES
}
class PostStore implements IStates {
  post: IPost | null = null
  comments: IComment[] = []
  userRole = ROLES.USER

  userStore // 다른 스토어 참조하여 사용할 때

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.userStore = rootStore.userStore
  }

  setPost(post: IPost, comments: IComment[]) {
    this.post = post
    this.comments = comments
  }

  init() {
    this.post = null
    this.comments = []
  }
}

export default PostStore
