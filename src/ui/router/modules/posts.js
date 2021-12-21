import { lazy } from 'react'
import Auth from '@/ui/acl/Auth'

const PostRoutes = [
  {
    path: '/posts/:id',
    layout: 'DefaultLayout',
    component: Auth(
      lazy(() => import('@/ui/views/posts/detail')),
      true
    )
  },
  {
    path: '/posts',
    layout: 'DefaultLayout',
    className: 'post-application',
    component: Auth(
      lazy(() => import('@/ui/views/posts/list')),
      true
    )
  }
]

export default PostRoutes
