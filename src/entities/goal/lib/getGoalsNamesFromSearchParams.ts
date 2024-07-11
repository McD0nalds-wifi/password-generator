import { ReadonlyURLSearchParams } from 'next/navigation'

import { GoalName } from '../model/types'

export const getGoalsNamesFromSearchParams = (searchParams: ReadonlyURLSearchParams) => {
    const goalsNames = searchParams.get('goalsNames')

    if (!goalsNames) {
        return
    }

    return JSON.parse(goalsNames) as GoalName[]
}
