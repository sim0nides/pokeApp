import React from 'react'
import { useTranslation } from 'react-i18next'

import PokeType from '@/app/components/PokeType'
import Skeleton from '@/app/components/Skeleton'
import { normalizeKebabCase } from '@/helpers/formatters'

import Item from './Item'

type AttributesCard = {
  height?: number | null
  weight?: number | null
  baseExperience?: number | null
  abilities?: string[]
  types?: string[]

  loading: boolean
}

const AttributesCard = ({ loading, ...props }: AttributesCard) => {
  const { t } = useTranslation()

  const height = props.height != null ? `${props.height} cm` : '-'
  const weight = props.weight != null ? `${props.weight} kg` : '-'
  const baseExperience = props.baseExperience ?? '-'
  const abilities = props.abilities?.length
    ? props.abilities.map((i) => <p key={i}>{normalizeKebabCase(i)}</p>)
    : '-'
  const types = props.types?.length
    ? props.types.map((i) => <PokeType key={i} value={i} />)
    : '-'

  const skeleton = <Skeleton className="h-6" />

  return (
    <div className="ml-auto w-[50%] p-8 bg-black/10 rounded-lg grid grid-cols-2 gap-4">
      <Item label={t('poke.height')}>{loading ? skeleton : height}</Item>
      <Item label={t('poke.baseExperience')}>
        {loading ? skeleton : baseExperience}
      </Item>
      <Item label={t('poke.weight')}>{loading ? skeleton : weight}</Item>
      <Item label={t('poke.abilities')}>{loading ? skeleton : abilities}</Item>
      <Item label={t('poke.types')} className="mt-3 space-x-2">
        {loading ? skeleton : types}
      </Item>
    </div>
  )
}

export default AttributesCard
