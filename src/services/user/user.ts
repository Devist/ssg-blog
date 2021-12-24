import { IUser, IUserData, User } from '@/entities'
import { IUserRepository } from '@/repositories'
import { IUserService } from './user.types'
import { UserRepository } from '@/repositories'

const idsFromEmail = {
  'alexsando@ssg.com': 1,
  'kschoi@ssg.com': 2,
  'hwangsc@ssg.com': 3,
  'whatsup@ssg.com': 4,
  default: -1
}
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository = new UserRepository()) {}

  /**
   * # 유저 정보 가져오기
   * 성공시, 유저 정보를 반환합니다.
   */
  async fetchUser(userId: number): Promise<IUserData> {
    console.log(userId)
    const email =
      Object.keys(idsFromEmail).find(
        (key) => idsFromEmail[key as keyof typeof idsFromEmail] === userId
      ) || 'undefined'

    console.log('email', email)

    return await this.userRepository.fetchItem(userId).then((userData: IUserData) => {
      return {
        ...userData,
        email: email
      }
    })
  }
}
