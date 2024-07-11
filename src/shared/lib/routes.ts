import { isEmpty, omitBy } from 'lodash'

import { DifficultyName } from '@/entities/difficulty'
import { EquipmentName } from '@/entities/equipment'
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
            difficulties?: DifficultyName[]
            equipment?: EquipmentName[]
            goals?: GoalName[]
            muscles?: MuscleName[]
        }) => {
            const nonemptyFilters = omitBy(
                {
                    difficulties: params?.difficulties ? JSON.stringify(params.difficulties) : undefined,
                    equipment: params?.equipment ? JSON.stringify(params.equipment) : undefined,
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
