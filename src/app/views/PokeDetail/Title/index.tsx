import React, { ReactNode } from 'react'

import Skeleton from '@/app/components/Skeleton'

type TitleProps = {
  children: ReactNode
  loading: boolean
}

const Title = ({ children, loading }: TitleProps) => {
  return (
    <h1 className="mb-12 text-center text-white font-bold capitalize text-4xl">
      {loading ? <Skeleton className="w-full h-8" /> : children}
    </h1>
  )
}

export default Title
