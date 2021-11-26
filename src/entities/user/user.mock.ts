import { IUser, IUserData, USER_ROLE_TYPE } from './user.types'
import { User } from './user'

// export const mockUserRequestData = (): IUserData[] => [
//   {
//     id:1,
//     name: '오동환',
//     email: 'aboutdh89@naver.com',
//     phone: '01058753636',
//   },
/** ************************
 * request
 * *************************/
// 비밀번호 유효성 검사
// 하드 코딩도 좋지만, faker 또는 랜덤 등을 활용하여 동적으로 구성해도 좋음
//   {
//     email: 'aboutdh89@naver.com',
//     password:'1234'
//   }
// ]

// export const mockUser = (data: IUserData[] = mockUserData()): IUser[] =>
//   data.map((item) => new User(item))
