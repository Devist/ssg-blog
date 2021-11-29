// ** React Imports
import { useEffect, useState } from 'react'

const DefaultLayout = ({ children, ...rest }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* 네비게이션. 추후 분리 */}
      <nav className="bg-primary text-white">
        <ul className="container mx-auto flex">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              SSG BLOG
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              내정보
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="#">
              로그아웃
            </a>
          </li>
        </ul>
      </nav>

      {/* 콘텐츠 영역 */}
      <div className="container mx-auto p-1">{children}</div>
    </>
  )
}

export default DefaultLayout
