// ** React Imports
import { useEffect, useState } from 'react'

const BlankLayout = ({ children, ...rest }) => {
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
    <div className="container mx-auto ">
      <div class="flex items-center justify-center h-screen">
        <div class="bg-indigo-800 text-primary font-bold rounded-lg border shadow-lg p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BlankLayout
