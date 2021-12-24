import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginService } from '@/services/login'
import { UserRepository } from '@/repositories'
import Login from './LoginPresenter'
import { ILoginData } from '@/entities'
import { useStores } from '@/ui/stores'

function LoginContainer() {
  // *** states
  const [loginText, setLoginText] = useState<ILoginData>({ email: '', password: '' })
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)
  const { userStore } = useStores()

  const history = useHistory()
  const service = new LoginService(new UserRepository())

  // 자식에게 전달하는 이벤트의 경우, handlers에 모은다.
  const handlers = {
    onSubmit: async (): Promise<void> => {
      const user = await service.loginUser(loginText).catch(() => alert('로그인 정보가 없습니다.'))
      user && userStore.setUser(user)
      history.push('/posts')
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target
      setLoginText({ ...loginText, [name]: value })
      setIsEmailValid(service.isValidEmail(loginText))
      setIsPasswordValid(service.isValidPassword(loginText))
    }
  }

  // *** renders
  return (
    <>
      <Login
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        onSubmit={handlers.onSubmit}
        onChange={handlers.onChange}
      />
    </>
  )
}

export default LoginContainer
