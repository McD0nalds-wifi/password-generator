import { collection, getDocs } from 'firebase/firestore'
import { createSelector } from 'reselect'

import { api } from '@/shared/api'
import { db } from '@/shared/lib'

import { Equipment } from '../model/types'

export const equipmentApi = api.injectEndpoints({
    endpoints: (build) => ({
        equipment: build.query<Equipment[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'equipment')

                    const querySnapshot = await getDocs(ref)

                    const equipment = querySnapshot.docs.reduce<Equipment[]>((acc, doc) => {
                        const data = doc.data()

                        acc.push({ ...data, id: doc.id } as Equipment)

                        return acc
                    }, [])

                    return { data: equipment }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

const selectEquipmentState = equipmentApi.endpoints.equipment.select()
const selectEquipment = createSelector(selectEquipmentState, (state) => state.data ?? null)

export const { useEquipmentQuery } = equipmentApi

export const equipmentSelectors = { selectEquipment }
