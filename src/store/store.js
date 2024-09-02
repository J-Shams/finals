import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoSlice/todoSlice'

export const store = configureStore({
  reducer: {
    todo:todoReducer
  },
})
