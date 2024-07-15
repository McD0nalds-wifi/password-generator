import { Divider } from 'antd'

import { ExercisesList } from '@/widgets/exercises-list'
import { Filters } from '@/widgets/filters'

export default function Exercises() {
    return (
        <>
            <Filters page='exercises' />

            <Divider />

            <ExercisesList />
        </>
    )
}
