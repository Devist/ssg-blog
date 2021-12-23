import { IPost } from '@/entities'
import { PostsService } from '@/services/posts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostDetailPresenter from './PostDetailPresenter'

function PostDetailContainer() {
  const { id } = useParams()
  const [post, setPost] = useState<IPost>()
  const [loading, setLoading] = useState<boolean>(true)
  const postsService = new PostsService()

  useEffect(() => {
    const postID = id ? parseInt(id) : null
    postID && postsService.fetchOne(postID).then(([post]) => setPost(post))
  }, [])

  useEffect(() => {
    post && setLoading(false)
  }, [post])

  return (
    <>
      <PostDetailPresenter loading={loading} post={post} comments={postsService.getComments()} />
    </>
  )
}

export default PostDetailContainer
