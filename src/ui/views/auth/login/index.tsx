import { useHistory } from 'react-router-dom'
import { UserService } from '@/services/user'
import UserRepository from '@/repositories/UserRepository'

function Login() {
  const userService = new UserService(new UserRepository())
  const history = useHistory()

  const methods = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      console.log('로그인')
      // userService.
      history.push('/posts')
    }
  }
  return (
    <div className="w-full max-w-xs items-center">
      <h1 className="text-primary text-center py-1">SSG 블로그</h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={methods.handleSubmit}>
        <div className="mb-4">
          <label className="block text-dark text-sm font-bold mb-2" htmlFor="username">
            이메일
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-dark text-sm font-bold mb-2" htmlFor="password">
            비밀번호
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-warning text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            로그인
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 ssg 웹 개발팀. All rights reserved.
      </p>
    </div>
  )
}

export default Login
