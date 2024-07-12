import { DocumentData, QueryDocumentSnapshot } from '@firebase/firestore'
import { getDoc } from 'firebase/firestore'

import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Force } from '@/entities/forces'
import { Grip } from '@/entities/grips'
import { Mechanic } from '@/entities/mechanics'

import { Exercise } from '../model/types'

export const mapExercise = async (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
    const data = doc.data()

    const grips: Grip[] = []

    const difficultySnapshot = await getDoc(data.difficulty)
    const difficulty = { ...(difficultySnapshot.data() as Difficulty), id: difficultySnapshot.id }

    const equipmentSnapshot = await getDoc(data.equipment)
    const equipment = { ...(equipmentSnapshot.data() as Equipment), id: equipmentSnapshot.id }

    const forceSnapshot = await getDoc(data.force)
    const force = { ...(forceSnapshot.data() as Force), id: forceSnapshot.id }

    const mechanicSnapshot = await getDoc(data.mechanic)
    const mechanic = { ...(mechanicSnapshot.data() as Mechanic), id: mechanicSnapshot.id }

    for (const grip of data.grips) {
        const gripSnapshot = await getDoc(grip)

        grips.push({ ...(gripSnapshot.data() as Grip), id: gripSnapshot.id })
    }

    return { ...data, difficulty, equipment, force, grips, id: doc.id, mechanic } as Exercise
}
