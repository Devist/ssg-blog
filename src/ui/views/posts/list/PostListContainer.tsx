import { PostsRepository } from '@/repositories'
import { PostsService } from '@/services/posts'
import PostListPresenter from './PostListPresenter'
import { useState, useEffect } from 'react'
import { IPost } from '@/entities'

function PostListContatiner() {
  const [posts, setPosts] = useState<IPost[]>()
  const postsService = new PostsService(new PostsRepository())

  useEffect(() => {
    postsService.fetchAll().then((posts) => setPosts(posts))
  }, [])

  return <>{posts ? <PostListPresenter posts={posts} /> : <div>불러오는중...</div>}</>
}

export default PostListContatiner
