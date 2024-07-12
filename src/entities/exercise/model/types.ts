import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Force } from '@/entities/forces'
import { Grip } from '@/entities/grips'
import { Mechanic } from '@/entities/mechanics'

export type Exercise = {
    count: number
    difficulty: Difficulty
    equipment: Equipment
    femalePosterId: string
    femaleVideoId: string
    force: Force
    grips: Grip[]
    id: string
    malePosterId: string
    maleVideoId: string
    mechanic: Mechanic
    sets: number
    steps: string[]
    type: ExerciseType
}

export type ExerciseType = 'reps' | 'duration'
