export enum CATEGORY_TYPE {
  DEVELOPMENT,
  NOTICE
}

export interface IPostData {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPost extends IPostData {
  createdDate: string
  isLock: boolean
  category: CATEGORY_TYPE
  validate(): boolean
}
