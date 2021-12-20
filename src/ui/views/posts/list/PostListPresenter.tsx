import { IPost } from '@/entities'
import PostCard from '@/ui/components/PostCard'

interface Props {
  posts: IPost[]
}

function PostListPresenter({ posts }: Props) {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  )
}

export default PostListPresenter
