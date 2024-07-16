'use client'

import { Space } from 'antd'

import { ExerciseContent, ExerciseDescription } from '@/entities/exercise'
import { WorkoutSteps } from '@/entities/workout'

const steps = [
    'Утяжеленная планка для предплечья',
    'Подтягивание подбородка',
    'Канатная череподробилка',
    'Висячие подъемы коленей',
    'Сгибание молота с гантелями',
    'Упраженение со штангой',
]

export default function WorkoutPage() {
    return (
        <WorkoutSteps currentStep={1} onStepChange={() => null} steps={steps}>
            <Space align='start' size='middle' style={{ marginTop: 16 }}>
                <ExerciseContent
                    femaleMedia={[]}
                    maleMedia={[]}
                    steps={[
                        'Встаньте на колени, прижав оба предплечья к земле.',
                        'Положите утяжелитель на спину (или попросите партнера сделать это за вас).',
                    ]}
                />

                <ExerciseDescription
                    // beforeSlot={
                    //     <Space>
                    //         <Switch
                    //             checkedChildren={<ManOutlined />}
                    //             defaultChecked
                    //             unCheckedChildren={<WomanOutlined />}
                    //         />
                    //
                    //         <Text>Мужчина</Text>
                    //     </Space>
                    // }
                    descriptions={[
                        { title: 'Сложность', value: 'Средняя' },
                        { title: 'Усилие', value: '' },
                    ]}
                />
            </Space>
        </WorkoutSteps>
    )
}
