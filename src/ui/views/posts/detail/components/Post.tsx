import { IPost } from '@/entities'
import { UserService } from '@/services/user'
import Profile from '@/ui/@core/components/organisms/profile'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ROLES, SCOPES } from '@/ui/acl/permission-maps'
import PermissionsGate from '@/ui/acl/PermissionsGate'
import Button from '@/ui/@core/components/atoms/Button'

interface Props {
  userId: number
  item: IPost | null
  loading: boolean
}

function Post({ userId, item, loading }: Props) {
  const [role, setRole] = useState<ROLES>(ROLES.USER)

  useEffect(() => {
    if (!item) return
    userId === item.userId ? setRole(ROLES.EDITOR) : setRole(ROLES.USER)
  }, [item])

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
          <div className="flex justify-between items-center">
            <Profile
              name={`작성자`}
              subName={`ID : ${item.userId}`}
              size={45}
              className="pt-6 pb-4 px-1"
            />
            <PermissionsGate role={role} scopes={[SCOPES.canEdit]}>
              <div>
                <Button className="mx-2">수정</Button>
                <Button color="warning">삭제</Button>
              </div>
            </PermissionsGate>
          </div>
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
