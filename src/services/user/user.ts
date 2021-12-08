import { IUser, User } from '@/entities'
import UserRepository from '@/repositories/UserRepository'
import { IUserService } from './user.types'

export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUser(): IUser {
    return new User(this.userRepository.getItem())
  }
}
