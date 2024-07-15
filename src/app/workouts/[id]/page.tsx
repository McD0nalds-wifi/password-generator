'use client'

import { ManOutlined, WomanOutlined } from '@ant-design/icons'
import { Space, Switch, Typography } from 'antd'

import { ExerciseContent, ExerciseDescription } from '@/entities/exercise'
import { WorkoutSteps } from '@/entities/workout'

const { Text } = Typography

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
                    mediaList={[
                        {
                            posterUrl:
                                'https://media.musclewiki.com/media/uploads/og-male-plate-weighted-forearm-plank-front.jpg',
                            videoUrl:
                                'https://media.musclewiki.com/media/uploads/videos/branded/male-plate-weighted-forearm-plank-front.mp4',
                        },
                        {
                            posterUrl:
                                'https://media.musclewiki.com/media/uploads/og-male-plate-weighted-forearm-plank-side.jpg',
                            videoUrl:
                                'https://media.musclewiki.com/media/uploads/videos/branded/male-plate-weighted-forearm-plank-side.mp4',
                        },
                    ]}
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
