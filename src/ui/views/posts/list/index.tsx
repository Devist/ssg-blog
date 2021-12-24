import { useState, useEffect } from 'react'
import { PostsService } from '@/services/posts'
import PostListPresenter from './Presenter'
import FetchMore from '@/ui/components/FetchMore'
import { useHistory } from 'react-router-dom'
import { useStores } from '@/ui/stores'
import { observer } from 'mobx-react'

function PostListContatiner() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { postsStore } = useStores()

  const postsService = new PostsService()

  useEffect(() => {
    handlers.fetchMore()
    return () => postsStore.init()
  }, [])

  const handlers = {
    onClick: (postID: number): void => {
      history.push(`/posts/${postID}`)
    },
    fetchMore: async () => {
      setLoading(true)
      const pagination = postsStore.pagination
      postsStore.setPosts(await postsService.fetchMore(pagination))
      postsStore.setPage(pagination._page + 1)
      setLoading(false)
    }
  }

  return (
    <>
      <PostListPresenter posts={postsStore.posts} onClick={handlers.onClick} />
      <FetchMore loading={loading} onScrollToBottom={handlers.fetchMore} />
    </>
  )
}

export default observer(PostListContatiner)
