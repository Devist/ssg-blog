// import { useEffect } from 'react'
// // import { useStores } from '@/stores'
// import { ROLES } from '@/ui/acl/permission-maps'

// export default function (SpecificComponent, option, adminRoute = null) {
//   // 권한 체크 수행
//   function AuthenticationCheck(props) {
//     // const { userStore } = useStores()
//     const role = userStore.role

//     useEffect(() => {
//       if (adminRoute && role === ROLES.ADMIN) {
//         props.history.push('/not-authorized')
//       }
//     }, [])

//     return <SpecificComponent {...props} />
//   }
//   return AuthenticationCheck
// }
