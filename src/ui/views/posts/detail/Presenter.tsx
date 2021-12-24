import { IComment, IPost, IUser } from '@/entities'
import Divider from '@/ui/@core/components/atoms/Divider'
import Comment from '@/ui/views/posts/detail/components/Comment'
import Post from '@/ui/views/posts/detail/components/Post'
import Skeleton from 'react-loading-skeleton'

interface IProps {
  post: IPost | null
  loading: boolean
  comments?: IComment[]
  user: IUser
}

function PostDetailPresenter({ loading, post, comments, user }: IProps) {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      {/* 포스팅 영역 */}
      <Post userId={user.id} loading={loading} item={post} />
      <Divider className="pt-8" />

      {/* 댓글 영역 */}
      {loading ? <Skeleton width={130} height={30} /> : <h3>Responses({comments?.length})</h3>}
      {comments ? (
        <>
          {comments.map((comment, index) => (
            <div key={`comment-${comment.id}`} className="pr-12">
              {index !== 0 && <Divider className="mx-16" />}
              <Comment item={comment} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  )
}

export default PostDetailPresenter
