import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'

import PageSpinner from '@/app/components/PageSpinner'
import { setData, setOrderByName } from '@/features/poke-list/pokeListSlice'
import { GetPokemonsDocument } from '@/gql/graphql'
import { useAppDispatch, useAppSelector } from '@/store'

import LoadingRow from './LoadingRow'
import Pagination from './Pagination'
import Row from './Row'
import SearchBar from './SearchBar'
import SortHeader from './SortHeader'

import styles from './styles.module.scss'

const PokeList = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.pokeList.data)
  const searchByName = useAppSelector((state) => state.pokeList.searchByName)
  const orderByName = useAppSelector((state) => state.pokeList.orderByName)
  const offset = useAppSelector((state) => state.pokeList.offset)
  const limit = useAppSelector((state) => state.pokeList.limit)
  const fetchingMore = useAppSelector((state) => state.pokeList.fetchingMore)

  const [fetchData, { loading }] = useLazyQuery(GetPokemonsDocument, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      dispatch(setData(data))
    }
  })

  useEffect(() => {
    fetchData({
      variables: {
        offset,
        limit,
        orderBy: {
          name: orderByName
        },
        where: searchByName
          ? {
              name: {
                _ilike: `%${searchByName}%`
              }
            }
          : undefined
      }
    })
  }, [searchByName, orderByName, offset, limit])

  const noDataFound = data?.length === 0

  return (
    <>
      <SearchBar />
      <div className="overflow-x-auto shadow-sm rounded-lg mt-3">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <SortHeader
                  value={orderByName}
                  onChange={(nextValue) => dispatch(setOrderByName(nextValue))}
                >
                  {t('poke.name')}
                </SortHeader>
              </th>
              <th>{t('poke.types')}</th>
            </tr>
          </thead>
          <tbody>
            {noDataFound ? (
              <tr>
                <td colSpan={2} className="text-center">
                  {t('pokeList.noDataFound')}
                </td>
              </tr>
            ) : (
              data?.map((i) => (
                <Row
                  key={i.id}
                  pokemonId={i.id}
                  pokemonName={i.name}
                  pokemonTypes={i.pokemon_v2_pokemontypes.flatMap((j) =>
                    j.pokemon_v2_type ? [j.pokemon_v2_type.name] : []
                  )}
                  pokemonSprites={i.pokemon_v2_pokemonsprites?.[0].sprites}
                />
              ))
            )}
            {loading && (fetchingMore ? <LoadingRow /> : <PageSpinner />)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <Pagination />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default PokeList
