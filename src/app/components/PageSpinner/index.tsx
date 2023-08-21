import React from 'react'
import { createPortal } from 'react-dom'

import Spinner from '../Spinner'

const PageSpinner = () => {
  return (
    <>
      {createPortal(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center p-6 rounded-lg bg-gray-600/30">
            <Spinner />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default PageSpinner
