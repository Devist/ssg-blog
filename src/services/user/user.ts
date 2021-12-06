import { ILoginData, User, IUserData } from '@/entities'
import UserRepository from '@/repositories/UserRepository'
import { IUserService } from './user.types'

export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}
  loginUser(login: ILoginData): Promise<User> {
    throw new Error('Method not implemented.')
  }
  getUser(): User {
    return new User(this.userRepository.getItem())
  }
}
