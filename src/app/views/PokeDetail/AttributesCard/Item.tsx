import React, { ReactNode } from 'react'

type ItemProps = {
  label: string
  children?: ReactNode
  className?: string
}

const Item = ({ label, className, children }: ItemProps) => {
  className = className ?? 'text-xl text-white capitalize'
  return (
    <div>
      <label className="text-gray-400 font-normal block mb-1.5">{label}</label>
      <div className={className}>{children}</div>
    </div>
  )
}

export default Item
