import { lazy } from 'react'

const PostRoutes = [
  {
    path: '/posts/:id',
    layout: 'DefaultLayout',
    component: lazy(() => import('@/ui/views/posts/detail'))
  },
  {
    path: '/posts',
    layout: 'DefaultLayout',
    className: 'post-application',
    component: lazy(() => import('@/ui/views/posts/list'))
  }
]

export default PostRoutes
