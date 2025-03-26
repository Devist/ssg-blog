import { IComment, IPost } from '@/entities'
import { PostsService } from '@/services/posts'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostDetailPresenter from './Presenter'
import { useStores } from '@/ui/stores/index'
import { observer } from 'mobx-react'

function PostDetailContainer() {
  const [loading, setLoading] = useState<boolean>(true)
  const { userStore, postStore } = useStores()
  const { id } = useParams<{ id: string }>()

  const postsService = new PostsService()

  useEffect(() => {
    const postId = id ? parseInt(id) : null

    postId &&
      postsService
        .fetchOne(postId)
        .then((post: [IPost, IComment[]]) => postStore.setPost(post[0], post[1]))

    return () => postStore.init()
  }, [])

  useEffect(() => {
    if (postStore.post) setLoading(false)
  }, [postStore.post])

  return (
    <>
      <PostDetailPresenter
        user={userStore.user}
        loading={loading}
        post={postStore.post}
        comments={postStore.comments}
      />
    </>
  )
}

export default observer(PostDetailContainer)
