import { ReadonlyURLSearchParams } from 'next/navigation'

import { DifficultyName } from '../model/types'

export const getDifficultiesNamesFromSearchParams = (searchParams: ReadonlyURLSearchParams) => {
    const difficultiesNames = searchParams.get('difficultiesNames')

    if (!difficultiesNames) {
        return
    }

    return JSON.parse(difficultiesNames) as DifficultyName[]
}
