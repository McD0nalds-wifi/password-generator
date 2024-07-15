import { Divider } from 'antd'

import { Filters } from '@/widgets/filters'
import { WorkoutsList } from '@/widgets/workouts-list'

export default function Workouts() {
    return (
        <>
            <Filters page='workouts' />

            <Divider />

            <WorkoutsList />
        </>
    )
}
