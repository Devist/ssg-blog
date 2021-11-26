export enum USER_ROLE_TYPE {
  EDITOR = 'editor',
  USER = 'user'
}

// optional(?) 이 많을 때에는 별도로 리퀘스트 타입을 정의하는 것도 괜찮을 듯
export interface IUserRequest {}

export interface IUserData {
  email?: string
  password?: string
  id: number
  name: string
  phone: string
}

export interface IUser extends IUserData {
  role: USER_ROLE_TYPE
  validate(): boolean
}

export const USER_EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
export const USER_MIN_PASSWORD_LENGTH = 10
export const USER_MAX_PASSWORD_LENGTH = 30
