import { IPost } from '@/entities'
import PostCard from '@/ui/components/PostCard'
import Skeleton from 'react-loading-skeleton'

interface Props {
  posts: IPost[] | undefined
}

function PostListPresenter({ posts }: Props) {
  const skeletons = () => (
    <>
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
    </>
  )

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {posts
          ? posts.map((post, idx) => <PostCard key={`post-card-${idx}`} post={post} />)
          : skeletons()}
      </div>
    </>
  )
}

export default PostListPresenter
