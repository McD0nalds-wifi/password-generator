import { collection, getDocs } from 'firebase/firestore'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Category } from '../model/types'

export const categoryApi = api.injectEndpoints({
    endpoints: (build) => ({
        categories: build.query<Category[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'categories')

                    const querySnapshot = await getDocs(ref)

                    const categories = querySnapshot.docs.reduce<Category[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Category)

                        return acc
                    }, [])

                    return { data: categories }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

export const { useCategoriesQuery } = categoryApi
