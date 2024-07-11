import { ReadonlyURLSearchParams } from 'next/navigation'

import { MuscleName } from '@/entities/muscle'

export const getDefaultSelectedMuscles = (searchParams: ReadonlyURLSearchParams) => {
    const selectedMuscles = searchParams.get('muscles')

    if (!selectedMuscles) {
        return
    }

    return JSON.parse(selectedMuscles) as MuscleName[]
}
