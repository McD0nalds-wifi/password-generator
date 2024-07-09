import { store } from './index'

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
