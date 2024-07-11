import { collection, getDocs } from 'firebase/firestore'
import { createSelector } from 'reselect'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Goal } from '../model/types'

export const goalApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGoals: build.query<Goal[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'goals')

                    const querySnapshot = await getDocs(ref)

                    const goals = querySnapshot.docs.reduce<Goal[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Goal)

                        return acc
                    }, [])

                    return { data: goals }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

const selectGoalsState = goalApi.endpoints.getGoals.select()
const selectGoals = createSelector(selectGoalsState, (state) => state.data ?? null)

export const { useGetGoalsQuery } = goalApi

export const goalsSelectors = { selectGoals }
