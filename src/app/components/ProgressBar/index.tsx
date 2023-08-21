import React from 'react'

type ProgressBarProps = {
  percentValue: number
}

const ProgressBar = ({ percentValue }: ProgressBarProps) => {
  percentValue = percentValue < 0 ? 0 : percentValue > 100 ? 100 : percentValue
  return (
    <div className="w-full rounded h-2.5 bg-gray-500/80">
      <div
        className="h-full rounded bg-blue-400"
        style={{
          width: `${percentValue}%`
        }}
      />
    </div>
  )
}

export default ProgressBar
