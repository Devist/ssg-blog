import Card from '@/ui/@core/components/molecules/card/Card'
import CardTitle from '@/ui/@core/components/molecules/card/CardTitle'
import CardBody from '@/ui/@core/components/molecules/card/CardBody'
import { IPost } from '@/entities'

interface Props {
  post: IPost
}

function PostCard({ post }: Props) {
  return (
    <Card>
      <CardTitle text={post.title} />
      <CardBody>
        <p className="text-gray-700 text-base line-clamp-6">{post.body}</p>
      </CardBody>
    </Card>
  )
}

export default PostCard
