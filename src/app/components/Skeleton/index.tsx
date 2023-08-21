import React, { HtmlHTMLAttributes } from 'react'
import cs from 'classnames'

type SkeletonProps = HtmlHTMLAttributes<HTMLDivElement>

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      role="status"
      className={cs('animate-pulse rounded bg-gray-500', className)}
      {...props}
    />
  )
}

export default Skeleton
