import { IPost } from '@/entities'
import Profile from '@/ui/@core/components/organisms/profile'

interface Props {
  item: IPost
}

function Post({ item }: Props) {
  return (
    <>
      <h1>{item.title}</h1>
      <Profile name={`작성자`} subName={`ID : ${item.id}`} size={45} className="pt-6 pb-4 px-1" />
      <p className="md:text-lg">{item.body}</p>
    </>
  )
}

export default Post
