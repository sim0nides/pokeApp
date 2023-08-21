import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import pokeListReducer from '@/features/poke-list/pokeListSlice'

const rootReducer = {
  pokeList: pokeListReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: !import.meta.env.PROD
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store
