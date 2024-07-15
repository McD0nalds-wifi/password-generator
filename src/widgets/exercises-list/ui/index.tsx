'use client'

import { ReactNode } from 'react'

import { Col, Empty, Result, Row } from 'antd'
import { isEmpty } from 'lodash'

import { DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME, DIFFICULTY_TITLE_BY_DIFFICULTY_NAME } from '@/entities/difficulty'
import { EQUIPMENT_TITLE_BY_EQUIPMENT_NAME } from '@/entities/equipment'
import { routes } from '@/shared/lib'
import { Card, SkeletonCard } from '@/shared/ui'

import { useGetExercisesQuery } from '../api/exercisesListApi'
import { useGetExercisesArgs } from '../lib/useGetExercisesArgs'

const Column = ({ children }: { children: ReactNode }) => (
    <Col lg={12} md={12} sm={12} xl={8} xs={24} xxl={6}>
        {children}
    </Col>
)

export const ExercisesList = () => {
    const { difficulties, muscles, equipment, goals } = useGetExercisesArgs()

    const {
        data: exercises,
        isLoading,
        isFetching,
        isError,
        isUninitialized,
    } = useGetExercisesQuery({
        difficulties,
        equipment,
        goals,
        muscles,
    })

    if (isLoading || isFetching || isUninitialized) {
        return (
            <Row gutter={[16, 16]}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Column key={index}>
                        <SkeletonCard />
                    </Column>
                ))}
            </Row>
        )
    }

    if (isError) {
        return <Result status='error' subTitle='Пожалуйста, повторите попытку позже.' title='Что-то пошло не так' />
    }

    if (isEmpty(exercises)) {
        return <Empty description='Данные не найдены' />
    }

    return (
        <Row gutter={[16, 16]}>
            {exercises.map(({ difficulty, equipment, id, maleMedia, name }) => (
                <Column key={id}>
                    <Card
                        descriptions={[{ icon: '', title: EQUIPMENT_TITLE_BY_EQUIPMENT_NAME[equipment.name] }]}
                        href={routes.exercise.getRoute(id)}
                        imageUrl={`https://media.musclewiki.com/media/uploads/${maleMedia[0].previewId}.jpg`}
                        tags={[
                            {
                                color: DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME[difficulty.name],
                                title: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[difficulty.name],
                            },
                        ]}
                        title={name}
                    />
                </Column>
            ))}
        </Row>
    )
}
