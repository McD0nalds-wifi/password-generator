import { doc } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { db } from '@/shared/lib'

import { mapWorkout } from '../lib/mapWorkout'

export const getWorkout = async (id: string) => {
    const ref = doc(db, 'workouts', id)

    const docSnapshot = await getDoc(ref)

    const workout = await mapWorkout(docSnapshot)

    return workout
}
