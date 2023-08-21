import React, { ReactNode } from 'react'
import { IoCaretDown, IoCaretUp } from 'react-icons/io5'

import { Order_By } from '@/gql/graphql'

type SortHeaderProps = {
  children: ReactNode
  value: Order_By
  onChange: (nextValue: Order_By) => void
}

const SortHeader = ({ children, value, onChange }: SortHeaderProps) => {
  return (
    <div
      className="inline-flex items-center cursor-pointer"
      onClick={() =>
        onChange(value === Order_By.Asc ? Order_By.Desc : Order_By.Asc)
      }
    >
      {children}
      <span className="ml-2">
        {value === Order_By.Asc ? <IoCaretUp /> : <IoCaretDown />}
      </span>
    </div>
  )
}

export default SortHeader
