import { configureStore } from '@reduxjs/toolkit'

import { APP_REDUCER_PATH, api } from '../api'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    reducer: {
        [APP_REDUCER_PATH]: api.reducer,
    },
})
