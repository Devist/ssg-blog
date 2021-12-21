import { useState, useEffect } from 'react'

import { PostsService } from '@/services/posts'
import PostListPresenter from './PostListPresenter'

import { IPost } from '@/entities'
import FetchMore from '@/ui/components/FetchMore'

function PostListContatiner() {
  const [posts, setPosts] = useState<IPost[]>()
  const [loading, setLoading] = useState(false)

  const postsService = new PostsService()

  const pagination = postsService.getPagination()

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

  return (
    <>
      <PostListPresenter posts={posts} />
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
