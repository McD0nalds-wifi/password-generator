import { Difficulty, Exercise } from '@/entities/exercises'

export type Workout = {
    difficulty: Difficulty
    equipment: Equipment[]
    exercises: Exercise[]
    goalType: GoalType
    id: string
    name: string
    previewImageId: string
}

export type Equipment = 'dumbbells'

export type GoalType = 'gainMuscle'
