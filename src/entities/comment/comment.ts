import { IComment, ICommentData } from './comment.types'

export class Comment implements IComment {
  isHidden: boolean
  isBlocked: boolean
  createdDate: string
  postId: number
  id: number
  name: string
  email: string
  body: string

  constructor(data: ICommentData) {
    this.isHidden = false
    this.isBlocked = false
    this.createdDate = new Date().toDateString()

    this.postId = data.postId
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.body = data.body
  }

  validate(): boolean {
    throw new Error('Method not implemented.')
  }
}
