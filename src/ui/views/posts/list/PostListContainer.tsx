import { useState, useEffect } from 'react'
import { PostsService } from '@/services/posts'
import PostListPresenter from './PostListPresenter'
import FetchMore from '@/ui/components/FetchMore'
import { useHistory } from 'react-router-dom'

function PostListContatiner() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const postsService = new PostsService()

  useEffect(() => handlers.fetchMore(), [])

  const handlers = {
    onClick: (postID: number): void => {
      history.push(`/posts/${postID}`)
    },
    fetchMore: () => {
      setLoading(true)
      postsService.fetchMore().then(() => setLoading(false))
    }
  }

  return (
    <>
      <PostListPresenter posts={postsService.getPosts()} onClick={handlers.onClick} />
      <FetchMore loading={loading} setPage={handlers.fetchMore} />
    </>
  )
}

export default PostListContatiner
