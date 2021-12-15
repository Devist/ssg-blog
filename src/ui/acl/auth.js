import { useEffect } from 'react'
import { useStores } from '@/stores'
import { ROLES } from '@/ui/acl/permission-maps'

function Auth(SpecificComponent, option, adminRoute = null) {
  //SpecificComponent : LandingPage component

  // option: null => 아무나 출입 가능
  // option: true => 로그인 유저만
  // option: false => 로그인 하면 출입 불가능한 곳(회원가입 등...)

  // adminRoute : true이면 admin user만 출입 가능

  // 권한 체크 수행
  function AuthenticationCheck(props) {
    const { userStore } = useStores()
    const { role, id } = userStore

    useEffect(() => {
      if (option === true) {
        if (!id || id < 0) {
          props.history.push('/login')
        }
      }
      if (adminRoute && role === ROLES.ADMIN) {
        props.history.push('/not-authorized')
      }
    }, [])

    return <SpecificComponent {...props} />
  }
  return AuthenticationCheck
}

export default Auth
