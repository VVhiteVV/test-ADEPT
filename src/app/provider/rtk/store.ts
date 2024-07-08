import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {rootReducer} from "features/slices";


export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware]),
})

setupListeners(store.dispatch)