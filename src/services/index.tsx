import React from 'react'

import { UserService } from './user'
import UserRepository from '@/repositories/UserRepository'

export default class RootService {
  userService

  constructor() {
    this.userService = new UserService(new UserRepository())
  }
}

const ServicesContext = React.createContext(new RootService())
export const useServices = () => React.useContext(ServicesContext)
