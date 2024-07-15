import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Force } from '@/entities/forces'
import { Grip } from '@/entities/grips'
import { Mechanic } from '@/entities/mechanics'

export type Exercise = {
    count: number
    difficulty: Difficulty
    equipment: Equipment
    femaleMedia: ExerciseMedia[]
    force: Force
    grips: Grip[]
    id: string
    maleMedia: ExerciseMedia[]
    mechanic: Mechanic
    name: string
    sets: number
    steps: string[]
    type: ExerciseType
}

export type ExerciseType = 'reps' | 'duration'

export type ExerciseMedia = {
    previewId: string
    videoId: string
}
