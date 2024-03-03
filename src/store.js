import { configureStore } from '@reduxjs/toolkit'
import Watchlist from './Slices/MovieSlice'
export const store =  configureStore({
    reducer: {
        Watchlist
  },
})