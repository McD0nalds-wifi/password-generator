import { isEmpty, omitBy } from 'lodash'

import { CategoryName } from '@/entities/category'
import { DifficultyName } from '@/entities/difficulty'
import { GoalName } from '@/entities/goal'
import { MuscleName } from '@/entities/muscle'

export const routes = {
    home: {
        getRoute: () => '/',
    },
    workout: {
        getRoute: (id: string) => `/workouts/${id}`,
    },
    workouts: {
        getRoute: (params?: {
            categories?: CategoryName[]
            difficulties?: DifficultyName[]
            goals?: GoalName[]
            muscles?: MuscleName[]
        }) => {
            const nonemptyFilters = omitBy(
                {
                    categories: params?.categories ? JSON.stringify(params.categories) : undefined,
                    difficulties: params?.difficulties ? JSON.stringify(params.difficulties) : undefined,
                    goals: params?.goals ? JSON.stringify(params.goals) : undefined,
                    muscles: params?.muscles ? JSON.stringify(params.muscles) : undefined,
                },
                isEmpty,
            ) as Record<string, string>

            const searchParams = new URLSearchParams(nonemptyFilters).toString()

            if (searchParams) {
                return `/workouts?${searchParams}`
            }

            return '/workouts'
        },
    },
} as const
