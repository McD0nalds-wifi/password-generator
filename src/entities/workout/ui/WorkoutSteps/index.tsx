'use client'
import { ReactNode, useMemo, useState } from 'react'

import { Button, Space, Steps, message } from 'antd'

import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Exercise, ExerciseContent, ExerciseDescription } from '@/entities/exercise'
import { FORCE_TITLE_BY_FORCE_NAME } from '@/entities/forces'
import { Goal } from '@/entities/goal'
import { GRIP_TITLE_BY_GRIP_NAME } from '@/entities/grips'

type WorkoutStepsProps = {
    difficulty: Difficulty
    equipment: Equipment[]
    exercises: Exercise[]
    goal: Goal
    name: string
    previewImageId: string
}

export const WorkoutSteps = ({ difficulty, equipment, exercises, goal, name, previewImageId }: WorkoutStepsProps) => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = useMemo(
        () =>
            exercises.map(({ name }, index) => ({
                description: name,
                key: index,
            })),
        [exercises],
    )

    const currentExercise = exercises[currentStep]

    const next = () => {
        setCurrentStep((prev) => prev + 1)
    }

    const prev = () => {
        setCurrentStep((prev) => prev - 1)
    }

    return (
        <>
            <Steps current={currentStep} items={steps} labelPlacement='vertical' />

            <Space align='start' size='middle' style={{ marginTop: 16 }}>
                <ExerciseContent
                    femaleMedia={currentExercise.femaleMedia}
                    maleMedia={currentExercise.maleMedia}
                    steps={currentExercise.steps}
                />

                <ExerciseDescription
                    descriptions={[
                        {
                            title: 'Сложность',
                            value: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[currentExercise.difficulty.name],
                        },
                        { title: 'Усилие', value: FORCE_TITLE_BY_FORCE_NAME[currentExercise.force.name] },
                        ...currentExercise.grips.map(({ name }) => ({
                            title: 'Хватка',
                            value: GRIP_TITLE_BY_GRIP_NAME[name],
                        })),
                        { title: 'Mechanic', value: currentExercise.mechanic.name },
                    ]}
                />
            </Space>

            <div style={{ marginTop: 24 }}>
                {currentStep < steps.length - 1 && (
                    <Button onClick={() => next()} type='primary'>
                        Дальше
                    </Button>
                )}

                {currentStep === steps.length - 1 && (
                    <Button onClick={() => message.success('Тренировка закончена!')} type='primary'>
                        Закончить
                    </Button>
                )}

                {currentStep > 0 && (
                    <Button onClick={() => prev()} style={{ margin: '0 8px' }}>
                        Назад
                    </Button>
                )}
            </div>
        </>
    )
}
