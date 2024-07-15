import { DocumentData, DocumentSnapshot, QueryDocumentSnapshot } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Exercise, mapExercise } from '@/entities/exercise'
import { Goal } from '@/entities/goal'

import { Workout } from '../model/types'

export const mapWorkout = async (
    doc: QueryDocumentSnapshot<DocumentData, DocumentData> | DocumentSnapshot<DocumentData, DocumentData>,
) => {
    const data = doc.data()
    const exercises: Exercise[] = []
    const equipment: Equipment[] = []

    const difficultySnapshot = await getDoc(data?.difficulty)
    const difficulty = { ...(difficultySnapshot.data() as Difficulty), id: difficultySnapshot.id }

    const goalSnapshot = await getDoc(data?.goal)
    const goal = { ...(goalSnapshot.data() as Goal), id: goalSnapshot.id }

    for (const item of data?.exercises) {
        const exerciseSnapshot = await getDoc(item)
        const exerciseData = await mapExercise(exerciseSnapshot as QueryDocumentSnapshot<DocumentData, DocumentData>)

        exercises.push(exerciseData)
    }

    for (const item of data?.equipment) {
        const equipmentSnapshot = await getDoc(item)

        equipment.push({ ...(equipmentSnapshot.data() as Equipment), id: equipmentSnapshot.id })
    }

    return { ...data, difficulty, equipment, exercises, goal, id: doc.id } as Workout
}
