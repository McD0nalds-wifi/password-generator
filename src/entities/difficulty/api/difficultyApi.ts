import { collection, getDocs } from 'firebase/firestore'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Difficulty } from '../model/types'

export const difficultyApi = api.injectEndpoints({
    endpoints: (build) => ({
        difficulties: build.query<Difficulty[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'difficulties')

                    const querySnapshot = await getDocs(ref)

                    const difficulties = querySnapshot.docs.reduce<Difficulty[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Difficulty)

                        return acc
                    }, [])

                    return { data: difficulties }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

export const { useDifficultiesQuery } = difficultyApi
