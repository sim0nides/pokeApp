import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Search from '@/app/components/Search'
import { setSearchByName } from '@/features/poke-list/pokeListSlice'
import { useAppDispatch, useAppSelector } from '@/store'

import useDebouncedCallback from './useDebouncedCallback'

const SearchBar = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const searchByName = useAppSelector((state) => state.pokeList.searchByName)

  const onChange = (value: string) => {
    dispatch(setSearchByName(value))
  }

  const [localValue, setLocalValue] = useState(searchByName)

  const [debouncedChange, { cancel: cancelDebouncedChange }] =
    useDebouncedCallback(onChange, 600)

  const onLocalChange = (value: string) => {
    setLocalValue(value)
    debouncedChange(value)
  }

  const onClear = () => {
    cancelDebouncedChange()
    setLocalValue('')
    onChange('')
  }

  return (
    <Search
      name="search-poke"
      value={localValue}
      onChange={onLocalChange}
      onClear={onClear}
      placeholder={t('pokeList.search.placeholder')}
      className="shadow-sm"
    />
  )
}

export default SearchBar
