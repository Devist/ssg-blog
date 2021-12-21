import { IPost } from '@/entities'
import Profile from '@/ui/@core/components/organisms/profile'
import Skeleton from 'react-loading-skeleton'

interface Props {
  item: IPost | undefined
  loading: boolean
}

function Post({ item, loading }: Props) {
  return (
    <>
      {/* title */}
      <>
        {loading && <Skeleton height={60} />}
        {item && <h1>{item.title}</h1>}
      </>

      {/* writer */}
      <>
        {loading && <Skeleton width={200} height={45} className="mt-6 mb-4" />}
        {item && (
          <Profile
            name={`작성자`}
            subName={`ID : ${item.id}`}
            size={45}
            className="pt-6 pb-4 px-1"
          />
        )}
      </>

      {/* body */}
      <>
        {loading && <Skeleton height={100} />}
        {item && <p className="md:text-lg">{item.body}</p>}
      </>
    </>
  )
}

export default Post
