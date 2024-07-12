import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Exercise } from '@/entities/exercise'
import { Goal } from '@/entities/goal'

export type Workout = {
    difficulty: Difficulty
    equipment: Equipment[]
    exercises: Exercise[]
    goal: Goal
    id: string
    name: string
    previewImageId: string
}
