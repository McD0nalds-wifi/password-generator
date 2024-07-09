import { Divider } from 'antd'

import { WorkoutsFilters } from '@/widgets/workouts-filters'
import { WorkoutsList } from '@/widgets/workouts-list'

export default function Workouts() {
    return (
        <>
            <WorkoutsFilters />

            <Divider />

            <WorkoutsList />
        </>
    )
}
