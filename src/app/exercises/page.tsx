import { Suspense } from 'react'

import { Divider } from 'antd'

import { ExercisesList } from '@/widgets/exercises-list'
import { Filters } from '@/widgets/filters'

export default function Exercises() {
    return (
        <Suspense>
            <Filters page='exercises' />

            <Divider />

            <ExercisesList />
        </Suspense>
    )
}
