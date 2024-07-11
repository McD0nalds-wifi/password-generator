import { DocumentData, QueryDocumentSnapshot } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { Difficulty } from '@/entities/difficulty'
import { Equipment, EquipmentName } from '@/entities/equipment'
import { Exercise } from '@/entities/exercise'
import { Goal } from '@/entities/goal'

import { Workout } from '../model/types'

export const mapWorkout = async (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
    const data = doc.data()
    const exercises = [] as Exercise[]
    const equipment = [] as EquipmentName[]

    const difficultySnapshot = await getDoc(data.difficulty)
    const { name: difficulty } = difficultySnapshot.data() as Difficulty

    const goalTypeSnapshot = await getDoc(data.goalType)
    const { name: goalType } = goalTypeSnapshot.data() as Goal

    for (const item of data.exercises) {
        const exerciseSnapshot = await getDoc(item)

        exercises.push(exerciseSnapshot.data() as Exercise)
    }

    for (const item of data.equipment) {
        const equipmentSnapshot = await getDoc(item)
        const { name } = equipmentSnapshot.data() as Equipment

        equipment.push(name as EquipmentName)
    }

    return { ...data, difficulty, equipment, exercises, goalType, id: doc.id } as Workout
}
