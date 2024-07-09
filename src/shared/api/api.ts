import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const APP_REDUCER_PATH = 'app'

export const api = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({}),
    reducerPath: APP_REDUCER_PATH,
    refetchOnMountOrArgChange: false,
})
