import { DocumentData, QueryDocumentSnapshot } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { Exercise } from '../../exercise'
import { Workout } from '../model/types'

export const mapWorkout = async (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
    const data = doc.data()
    const exercises = [] as Exercise[]

    for (const exercise of data.exercises) {
        const exerciseData = await getDoc(exercise)

        exercises.push(exerciseData.data() as Exercise)
    }

    return { ...data, exercises, id: doc.id } as Workout
}
