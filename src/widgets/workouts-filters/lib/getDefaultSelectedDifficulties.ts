import { ReadonlyURLSearchParams } from 'next/navigation'

import { DifficultyName } from '@/entities/difficulty'

export const getDefaultSelectedDifficulties = (searchParams: ReadonlyURLSearchParams) => {
    const selectedDifficulties = searchParams.get('difficulties')

    if (!selectedDifficulties) {
        return
    }

    return JSON.parse(selectedDifficulties) as DifficultyName[]
}
