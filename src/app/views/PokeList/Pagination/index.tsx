import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi'

import {
  setLimit,
  setParamsForFetchMore,
  setParamsForFirstPage,
  setParamsForLastPage,
  setParamsForNextPage,
  setParamsForPrevPage
} from '@/features/poke-list/pokeListSlice'
import { useAppDispatch, useAppSelector } from '@/store'

import styles from './styles.module.scss'

const Pagination = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.pokeList.currentPage)
  const totalPages = useAppSelector((state) => state.pokeList.totalPages)
  const limit = useAppSelector((state) => state.pokeList.limit)
  const limitOptions = useAppSelector((state) => state.pokeList.limitOptions)

  const prevDisabled = currentPage - 1 < 1
  const nextDisabled = currentPage + 1 > totalPages

  const onFirst = () => {
    prevDisabled || dispatch(setParamsForFirstPage())
  }

  const onPrev = () => {
    prevDisabled || dispatch(setParamsForPrevPage())
  }

  const onNext = () => {
    nextDisabled || dispatch(setParamsForNextPage())
  }

  const onLast = () => {
    nextDisabled || dispatch(setParamsForLastPage())
  }

  const onLoadMore = () => {
    nextDisabled || dispatch(setParamsForFetchMore())
  }

  const onChangeLimit = (nextLimit: number) => {
    dispatch(setLimit(nextLimit))
  }

  return (
    <div className="p-3 text-gray-300">
      <div className="flex items-center">
        <select
          value={limit}
          onChange={(e) => onChangeLimit(+e.target.value)}
          className="rounded-md text-xl bg-inherit border border-gray-300 text-gray-300"
        >
          {limitOptions.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <span className="ml-auto mr-5">
          {t('pagination.pageInfo', {
            current: currentPage,
            total: totalPages
          })}
        </span>
        <div className={styles.pageNavWrapper}>
          <button disabled={prevDisabled} onClick={onFirst}>
            <HiChevronDoubleLeft />
          </button>
          <button disabled={prevDisabled} onClick={onPrev}>
            <HiChevronLeft />
          </button>
          <button disabled={nextDisabled} onClick={onNext}>
            <HiChevronRight />
          </button>
          <button disabled={nextDisabled} onClick={onLast}>
            <HiChevronDoubleRight />
          </button>
        </div>
      </div>
      <div className="flex mt-2">
        <button
          className={styles.loadMoreButton}
          disabled={nextDisabled}
          onClick={onLoadMore}
        >
          {t('pagination.button.loadMore')}
        </button>
      </div>
    </div>
  )
}

export default Pagination
