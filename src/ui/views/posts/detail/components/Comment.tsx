import { IComment } from '@/entities'
import Profile from '@/ui/@core/components/organisms/profile'

interface IProps {
  item: IComment
}

function Comment({ item }: IProps) {
  return (
    <>
      <Profile name={item.name} subName={item.email} size={30} className="pt-6 pb-4 px-1" />
      <div className="mt-2 text-sm">{item.body}</div>
    </>
  )
}

export default Comment
