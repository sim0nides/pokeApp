import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetPokemonsQuery, Order_By } from '@/gql/graphql'

export const namespace = 'pokeList'

interface PokeListState {
  data?: GetPokemonsQuery['pokemon_v2_pokemon']
  totalDataCount: number
  fetchingMore: boolean
  searchByName: string
  orderByName: Order_By
  offset: number
  limit: number
  currentPage: number
  totalPages: number
  limitOptions: number[]
}

const initialState: PokeListState = {
  totalDataCount: 0,
  fetchingMore: false,
  searchByName: '',
  orderByName: Order_By.Asc,
  offset: 0,
  limit: 10,
  currentPage: 0,
  totalPages: 0,
  limitOptions: [10, 20, 50]
}

const slice = createSlice({
  initialState,
  name: namespace,
  reducers: {
    setData: (state, action: PayloadAction<GetPokemonsQuery>) => {
      const { payload } = action
      state.totalDataCount =
        payload.pokemon_v2_pokemon_aggregate.aggregate?.count ?? 0
      if (state.fetchingMore && state.data) {
        state.fetchingMore = false
        state.data = [...state.data, ...payload.pokemon_v2_pokemon]
      } else {
        state.data = payload.pokemon_v2_pokemon
      }

      state.currentPage = Math.ceil(state.offset / state.limit) + 1
      state.totalPages = Math.ceil(state.totalDataCount / state.limit)
    },

    setSearchByName: (
      state,
      action: PayloadAction<PokeListState['searchByName']>
    ) => {
      state.searchByName = action.payload

      // reset
      state.offset = 0
      state.fetchingMore = false
    },

    setOrderByName: (
      state,
      action: PayloadAction<PokeListState['orderByName']>
    ) => {
      state.orderByName = action.payload

      // reset
      state.offset = 0
      state.fetchingMore = false
    },

    setOffset: (state, action: PayloadAction<PokeListState['offset']>) => {
      state.offset = action.payload
    },

    setLimit: (state, action: PayloadAction<PokeListState['limit']>) => {
      state.limit = action.payload
    },

    setParamsForFetchMore: (state) => {
      state.fetchingMore = true
      state.offset = state.currentPage * state.limit
    },

    setParamsForFirstPage: (state) => {
      state.offset = 0
    },

    setParamsForPrevPage: (state) => {
      state.offset = (state.currentPage - 2) * state.limit

      // reset
      state.fetchingMore = false
    },

    setParamsForNextPage: (state) => {
      state.offset = state.currentPage * state.limit

      // reset
      state.fetchingMore = false
    },

    setParamsForLastPage: (state) => {
      state.offset = (state.totalPages - 1) * state.limit
    }
  }
})

export const {
  setData,
  setSearchByName,
  setOrderByName,
  setOffset,
  setLimit,
  setParamsForFetchMore,
  setParamsForFirstPage,
  setParamsForLastPage,
  setParamsForNextPage,
  setParamsForPrevPage
} = slice.actions
export default slice.reducer
