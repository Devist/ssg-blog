import Card from '@/ui/@core/components/molecules/card/Card'
import CardTitle from '@/ui/@core/components/molecules/card/CardTitle'
import CardBody from '@/ui/@core/components/molecules/card/CardBody'
import { IPost } from '@/entities'

interface IProps {
  post: IPost
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

function PostCard({ post, onClick }: IProps) {
  return (
    <Card className="cursor-pointer">
      <div onClick={onClick}>
        <CardTitle text={post.title} />
        <CardBody>
          <p className="text-gray-700 text-base line-clamp-6">{post.body}</p>
        </CardBody>
      </div>
    </Card>
  )
}

export default PostCard
