'use client'

import { ReactNode } from 'react'

import { Col, Empty, Result, Row } from 'antd'
import { isEmpty } from 'lodash'

import { DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME, DIFFICULTY_TITLE_BY_DIFFICULTY_NAME } from '@/entities/difficulty'
import { EQUIPMENT_TITLE_BY_EQUIPMENT_NAME } from '@/entities/equipment'
import { GOAL_TAG_COLOR_BY_GOAL_NAME, GOAL_TITLE_BY_GOAL_NAME } from '@/entities/goal'
import { routes } from '@/shared/lib'
import { Card, SkeletonCard } from '@/shared/ui'

import { useGetWorkoutsQuery } from '../api/workoutsListApi'
import { useGetWorkoutsArgs } from '../lib/useGetWorkoutsArgs'

const Column = ({ children }: { children: ReactNode }) => (
    <Col lg={12} md={12} sm={12} xl={8} xs={24} xxl={6}>
        {children}
    </Col>
)

export const WorkoutsList = () => {
    const { difficulties, muscles, equipment, goals } = useGetWorkoutsArgs()

    const {
        data: workouts,
        isLoading,
        isFetching,
        isError,
        isUninitialized,
    } = useGetWorkoutsQuery({
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

    if (isEmpty(workouts)) {
        return <Empty description='Данные не найдены' />
    }

    return (
        <Row gutter={[16, 16]}>
            {workouts.map(({ id, previewImageId, name, goal, difficulty, equipment }) => (
                <Column key={id}>
                    <Card
                        descriptions={equipment.map(({ name }) => ({
                            icon: '',
                            title: EQUIPMENT_TITLE_BY_EQUIPMENT_NAME[name],
                        }))}
                        href={routes.workout.getRoute(id)}
                        imageUrl={`https://media.musclewiki.com/media/uploads/${previewImageId}.jpg`}
                        tags={[
                            {
                                color: DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME[difficulty.name],
                                title: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[difficulty.name],
                            },
                            {
                                color: GOAL_TAG_COLOR_BY_GOAL_NAME[goal.name],
                                title: GOAL_TITLE_BY_GOAL_NAME[goal.name],
                            },
                        ]}
                        title={name}
                    />
                </Column>
            ))}
        </Row>
    )
}
