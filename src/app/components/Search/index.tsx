import React, { InputHTMLAttributes } from 'react'
import { IoSearch } from 'react-icons/io5'
import cs from 'classnames'

import CloseButton from '../CloseButton'

type SearchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'name' | 'onChange'
> & {
  /** @default true */
  clearabale?: boolean

  name: string
  value: string | number
  onChange: (value: string) => void
  onClear?: () => void
}

const Search = ({
  clearabale = true,
  onChange,
  onClear,
  className,
  ...props
}: SearchProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-xl text-gray-900">
        <IoSearch />
      </div>
      <input
        className={cs(
          'block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-2 ring-white outline-none',
          { 'pr-8': clearabale },
          className
        )}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {clearabale && (
        <CloseButton
          className="absolute right-0 text-xl inset-y-0"
          onClick={onClear}
          disabled={!props.value}
        />
      )}
    </div>
  )
}

export default Search
