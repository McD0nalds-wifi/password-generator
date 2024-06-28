import { ReactNode, useMemo } from 'react'

import { Button, Steps, message } from 'antd'

type WorkoutStepsProps = {
    children: ReactNode
    currentStep: number
    onStepChange: (step: number) => void
    steps: Array<string>
}

export const WorkoutSteps = ({ children, currentStep, onStepChange, steps }: WorkoutStepsProps) => {
    const stepsItems = useMemo(
        () =>
            steps.map((step, index) => ({
                description: step,
                key: index,
            })),
        [steps],
    )

    const next = () => {
        onStepChange(currentStep + 1)
    }

    const prev = () => {
        onStepChange(currentStep - 1)
    }

    return (
        <>
            <Steps current={currentStep} items={stepsItems} labelPlacement='vertical' />

            {children}

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
