import { lazy } from 'react'

const AuthRoutes = [
  {
    layout: 'BlankLayout',
    path: '/auth/login',
    component: lazy(() => import('@/ui/views/auth/login'))
  }
]

export default AuthRoutes
