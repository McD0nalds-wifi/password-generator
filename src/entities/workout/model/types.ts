import { DifficultyName } from '@/entities/difficulty'
import { EquipmentName } from '@/entities/equipment'
import { Exercise } from '@/entities/exercise'
import { GoalName } from '@/entities/goal'

export type Workout = {
    difficulty: DifficultyName
    equipment: EquipmentName[]
    exercises: Exercise[]
    goalType: GoalName
    id: string
    name: string
    previewImageId: string
}
