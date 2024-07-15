import { doc } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { db } from '@/shared/lib'

import { mapExercise } from '../lib/mapExercise'

export const getExercise = async (id: string) => {
    const ref = doc(db, 'exercises', id)

    const docSnapshot = await getDoc(ref)

    const exercise = await mapExercise(docSnapshot)

    return exercise
}
