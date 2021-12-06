import { useHistory } from 'react-router-dom'
import { UserService } from '@/services/user'
import UserRepository from '@/repositories/UserRepository'
import { FormEvent } from 'react'
import Input from '@/ui/@core/components/atoms/input'

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function Login({ onSubmit }: Props) {
  const methods = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
      onSubmit(e)
    }
  }
  return (
    <div className="w-full max-w-xs items-center">
      <h1 className="text-primary text-center py-1">SSG 블로그</h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={methods.handleSubmit}>
        <div className="mb-4">
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            errorMessage="이메일은 5자 이상, 50자 이하이어야 하며, @가 포함되어야 합니다."
          />
        </div>
        <div className="mb-6">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            errorMessage="비밀번호는 8자 이상, 특수문자 포함 3개의 조합이어야 합니다."
          />
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
