import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserService } from '@/services/user'
import UserRepository from '@/repositories/UserRepository'
import Login from './presenter'
import { ILogin, ILoginData } from '../../../../entities/login/login.types'

function LoginContainer() {
  const [login, setLogin] = useState<ILoginData>()
  const history = useHistory()

  const userService = new UserService(new UserRepository())

  useEffect(() => {}, [])

  const handlers = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
      console.log('로그인')

      history.push('/posts')
    }
  }
  return (
    <>
      <Login onSubmit={handlers.onSubmit} />
    </>
  )
}

export default LoginContainer
