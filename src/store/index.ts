import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice.ts'
import dashboardSlice from './slices/dashboardSlice.ts'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboard: dashboardSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 