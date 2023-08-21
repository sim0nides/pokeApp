import React, { ButtonHTMLAttributes } from 'react'
import { IoClose } from 'react-icons/io5'
import cs from 'classnames'

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const CloseButton = ({ className, ...props }: CloseButtonProps) => {
  return (
    <button
      className={cs(
        'text-xl px-2',
        { 'text-gray-900/50': props.disabled },
        className
      )}
      {...props}
    >
      <IoClose />
    </button>
  )
}

export default CloseButton
