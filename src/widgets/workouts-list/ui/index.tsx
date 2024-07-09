'use client'
import { Col, Empty, Result, Row } from 'antd'
import { isEmpty } from 'lodash'

import { SkeletonWorkoutCard, WorkoutCard } from '@/entities/workout'
import { routes } from '@/shared/lib'

import { useWorkoutsQuery } from '../api/workoutsListApi'

export const WorkoutsList = () => {
    const { data: workouts, isLoading, isError, isUninitialized } = useWorkoutsQuery()

    if (isLoading || isUninitialized) {
        return (
            <Row gutter={[16, 16]}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Col key={index} lg={8} md={12} sm={12} xl={6} xs={24} xxl={6}>
                        <SkeletonWorkoutCard />
                    </Col>
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
            {workouts.map(({ id, previewImageId, name, goalType, difficulty, equipment }) => (
                <Col key={id} lg={8} md={12} sm={12} xl={6} xs={24} xxl={6}>
                    <WorkoutCard
                        difficulty={difficulty}
                        equipment={equipment}
                        goalType={goalType}
                        href={routes.workout.getRoute(id)}
                        imageUrl={`https://media.musclewiki.com/media/uploads/${previewImageId}.jpg`}
                        title={name}
                    />
                </Col>
            ))}
        </Row>
    )
}
