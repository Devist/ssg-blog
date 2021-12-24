import { UserService } from '.'

const userService = new UserService()

describe('>>> USER SERVICE', () => {
  it('>> 존재하는 userId인 경우, 정상적으로 유저 객체를 생성합니다.', async () => {
    const userId = 4
    const user = await userService.fetchUser(userId)
    expect(user.email).toBe('whatsup@ssg.com')
  })

  it('>> 준비한 userId가 아닌경우, email은 undefined입니다.', async () => {
    const userId = 5
    const user = await userService.fetchUser(userId)
    expect(user.email).toBe('undefined')
  })
})
