import { IPost } from '@/entities'
import PostCard from '@/ui/views/posts/list/components/PostCard'
import Skeleton from 'react-loading-skeleton'

interface Props {
  posts: IPost[] | undefined
  onClick: (postID: number) => void
}

function PostListPresenter({ posts, onClick }: Props) {
  // 내부에서 처리하는 경우(화면구성에서 발생하는 이벤트의 경우), events에 구현한다.
  const events = {
    handleClick: (postID: number | null): void => {
      if (!postID) return
      onClick(postID)
    }
  }
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
      <Skeleton height={300} />
      <Skeleton height={300} />
    </>
  )

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {posts && posts.length > 0
          ? posts.map((post, idx) => (
              <PostCard
                key={`post-card-${idx}`}
                post={post}
                onClick={() => events.handleClick(post.id ? post.id : null)}
              />
            ))
          : skeletons()}
      </div>
    </>
  )
}

export default PostListPresenter
