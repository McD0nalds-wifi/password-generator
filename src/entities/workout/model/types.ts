import { DifficultyName } from '@/entities/difficulty'

import { Exercise } from '../../exercise'

export type Workout = {
    difficulty: DifficultyName
    equipment: Equipment[]
    exercises: Exercise[]
    goalType: GoalType
    id: string
    name: string
    previewImageId: string
}

export type Equipment = 'dumbbells'

export type GoalType = 'gainMuscle'
