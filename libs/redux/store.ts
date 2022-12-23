 import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import errorSlice from './slice/errorSlice'
import exampleSlice from './slice/example/exampleSlice'

export const store = configureStore({
    reducer: {
        [exampleSlice.name]: exampleSlice.reducer,
        [errorSlice.name]: errorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

