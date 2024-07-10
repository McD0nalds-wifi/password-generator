import { collection, getDocs } from 'firebase/firestore'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Muscles } from '../model/types'

export const musclesApi = api.injectEndpoints({
    endpoints: (build) => ({
        muscles: build.query<Muscles[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'muscles')

                    const querySnapshot = await getDocs(ref)

                    const muscles = querySnapshot.docs.reduce<Muscles[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Muscles)

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

export const { useMusclesQuery } = musclesApi
