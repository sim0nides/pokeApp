import React from 'react'

import Skeleton from '@/app/components/Skeleton'

const LoadingRow = () => {
  return (
    <tr>
      <td>
        <Skeleton className="bg-gray-400 w-full h-6" />
      </td>
      <td>
        <Skeleton className="bg-gray-400 w-full h-6" />
      </td>
    </tr>
  )
}

export default LoadingRow
