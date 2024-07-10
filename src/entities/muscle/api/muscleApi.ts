import { collection, getDocs } from 'firebase/firestore'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Muscle } from '../model/types'

export const muscleApi = api.injectEndpoints({
    endpoints: (build) => ({
        muscles: build.query<Muscle[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'muscles')

                    const querySnapshot = await getDocs(ref)

                    const muscles = querySnapshot.docs.reduce<Muscle[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Muscle)

                        return acc
                    }, [])

                    return { data: muscles }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

export const { useMusclesQuery } = muscleApi
