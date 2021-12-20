import React, { useRef, useEffect } from 'react'

interface Props {
  loading: boolean
  children?: React.ReactChild
  setPage: () => void
}

const FetchMore = ({ loading, children, setPage }: Props) => {
  const fetchMoreTrigger = useRef<HTMLDivElement>(null)
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage()
  })

  useEffect(() => {
    if (fetchMoreTrigger.current) fetchMoreObserver.observe(fetchMoreTrigger.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (fetchMoreTrigger.current) fetchMoreObserver.unobserve(fetchMoreTrigger.current)
    }
  }, [])

  return (
    <div id="fetchMore" ref={fetchMoreTrigger}>
      {loading ? (
        children ? (
          children
        ) : (
          <div className="m-2 p-1 bg-primary text-white text-center">로딩중...</div>
        )
      ) : null}
    </div>
  )
}

export default FetchMore
