import React from 'react'
import { useTranslation } from 'react-i18next'

import ProgressBar from '@/app/components/ProgressBar'
import Skeleton from '@/app/components/Skeleton'
import { normalizeKebabCase } from '@/helpers/formatters'

interface PokeStats {
  id: number
  value: number
  name: string
}

type StatsCardProps = {
  stats?: PokeStats[]
  loading: boolean
}

const StatsCard = ({ stats, loading }: StatsCardProps) => {
  const { t } = useTranslation()

  const renderSkeletons = () =>
    Array(6)
      .fill(null)
      .map((_, idx) => <Skeleton key={idx} className="h-4" />)

  return (
    <div className="px-8 pt-4 pb-8 bg-white/10 rounded-lg mt-8 w-full">
      <label className="text-gray-900 font-normal block mb-3 text-lg">
        {t('common.stats')}
      </label>
      <div className="flex flex-col space-y-1.5">
        {loading
          ? renderSkeletons()
          : stats?.map((i) => (
              <div key={i.id}>
                <label className="text-gray-800 text-sm font-medium block mb-1.5 capitalize">
                  {normalizeKebabCase(i.name)}
                </label>
                <ProgressBar percentValue={(i.value * 100) / 200} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default StatsCard
