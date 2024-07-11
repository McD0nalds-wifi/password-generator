import { ReadonlyURLSearchParams } from 'next/navigation'

import { GoalName } from '@/entities/goal'

export const getDefaultSelectedGoals = (searchParams: ReadonlyURLSearchParams) => {
    const selectedGoals = searchParams.get('goals')

    if (!selectedGoals) {
        return
    }

    return JSON.parse(selectedGoals) as GoalName[]
}
