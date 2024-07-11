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
            difficultiesNames?: DifficultyName[]
            equipmentNames?: EquipmentName[]
            goalsNames?: GoalName[]
            musclesNames?: MuscleName[]
        }) => {
            const nonemptyFilters = omitBy(
                {
                    difficultiesNames: params?.difficultiesNames ? JSON.stringify(params.difficultiesNames) : undefined,
                    equipmentNames: params?.equipmentNames ? JSON.stringify(params.equipmentNames) : undefined,
                    goalsNames: params?.goalsNames ? JSON.stringify(params.goalsNames) : undefined,
                    musclesNames: params?.musclesNames ? JSON.stringify(params.musclesNames) : undefined,
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
