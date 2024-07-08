export type Exercise = {
    count: number
    difficulty: Difficulty
    femalePosterId: string
    femaleVideoId: string
    force: string
    grips: string[]
    id: string
    malePosterId: string
    maleVideoId: string
    mechanic: string
    sets: number
    steps: string[]
    type: ExerciseType
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'novice'

export type ExerciseType = 'reps' | 'duration'
