export interface ICommentData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IComment extends ICommentData {
  isHidden: boolean
  isBlocked: boolean
  createdDate: string
  validate(): boolean
}
