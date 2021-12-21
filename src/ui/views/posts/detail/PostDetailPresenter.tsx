import { IComment, IPost, IUser } from '@/entities'
import Divider from '@/ui/@core/components/atoms/Divider'
import Comment from '@/ui/components/Comment'
import Post from '@/ui/components/Post'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface IProps {
  post: IPost | undefined
  comments?: IComment[] | undefined
  user?: IUser
}

function PostDetailPresenter({ post, comments, user }: IProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    post && setLoading(false)
  }, [post])

  return (
    <div className="max-w-screen-md mx-auto px-4">
      {/* 포스팅 영역 */}
      <Post loading={loading} item={post} />
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

      {/* <div className="mt-3 p-3 w-full">
        <textarea
          rows={3}
          className="border p-2 rounded w-full"
          placeholder="당신의 생각은 무엇이가요?"></textarea>
      </div>

      <div className="flex justify-between mx-3">
        <div>
          <button className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">
            Submit
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default PostDetailPresenter
