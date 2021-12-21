import { useState, useEffect } from 'react'

import { PostsService } from '@/services/posts'
import PostListPresenter from './PostListPresenter'

import { IPost } from '@/entities'
import FetchMore from '@/ui/components/FetchMore'
import { useHistory } from 'react-router-dom'

function PostListContatiner() {
  // *** states
  const [posts, setPosts] = useState<IPost[]>()
  const [loading, setLoading] = useState(false)

  // ***  routers
  const history = useHistory()

  // *** services
  const postsService = new PostsService()
  const pagination = postsService.getPagination()

  // *** life cycles
  useEffect(() => {
    postsService.fetchAll().then((posts) => setPosts(posts))
  }, [])

  useEffect(() => {
    setLoading(true)
    postsService.fetchAll().then((nextPosts: IPost[]) => {
      setPosts((prev: IPost[] | undefined) => (prev ? [...prev, ...nextPosts] : nextPosts))
      setLoading(false)
    })
  }, [pagination._page])

  // *** handlers
  // 자식에게 전달하는 이벤트의 경우, handlers에 모은다.
  const handlers = {
    onClick: (postID: number): void => {
      history.push(`/posts/${postID}`)
    }
  }

  return (
    <>
      <PostListPresenter posts={posts} onClick={handlers.onClick} />
      <FetchMore
        loading={pagination._page !== 0 && loading}
        setPage={() => {
          postsService.updatePagination(pagination._page + 1)
        }}
      />
    </>
  )
}

export default PostListContatiner
