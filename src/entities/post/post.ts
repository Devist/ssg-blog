import { IPostData, IPost, CATEGORY_TYPE } from './post.types'

export class Post implements IPost {
  createdDate: string
  isLock: boolean
  category: CATEGORY_TYPE
  userId: number
  id: number
  title: string
  body: string

  constructor(data: IPostData) {
    this.createdDate = new Date().toDateString()
    this.isLock = false
    this.category = CATEGORY_TYPE.NOTICE

    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.body = data.body
  }

  validate(): boolean {
    throw new Error('Method not implemented.')
  }
}
