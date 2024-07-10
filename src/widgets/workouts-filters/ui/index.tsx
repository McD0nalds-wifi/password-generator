'use client'
import { Button, Select, Space } from 'antd'

import { CATEGORY_TITLE_BY_CATEGORY_NAME, useCategoriesQuery } from '@/entities/category'
import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, useDifficultiesQuery } from '@/entities/difficulty'
import { GOAL_TITLE_BY_GOAL_NAME, useGoalsQuery } from '@/entities/goal'
import { MUSCLE_TITLE_BY_MUSCLE_NAME, useMusclesQuery } from '@/entities/muscle'

export const WorkoutsFilters = async () => {
    const { data: difficulties, isLoading: isDifficultiesLoading } = useDifficultiesQuery()
    const { data: categories, isLoading: isCategoriesLoading } = useCategoriesQuery()
    const { data: muscles, isLoading: isMusclesLoading } = useMusclesQuery()
    const { data: goals, isLoading: isGoalsLoading } = useGoalsQuery()

    return (
        <Space size='middle'>
            <Select
                allowClear
                loading={isCategoriesLoading}
                mode='multiple'
                options={categories?.map(({ name }) => ({
                    label: CATEGORY_TITLE_BY_CATEGORY_NAME[name],
                    value: name,
                }))}
                placeholder='Категоия'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                loading={isDifficultiesLoading}
                mode='multiple'
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                loading={isMusclesLoading}
                mode='multiple'
                options={muscles?.map(({ name }) => ({
                    label: MUSCLE_TITLE_BY_MUSCLE_NAME[name],
                    value: name,
                }))}
                placeholder='Мышцы'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                loading={isGoalsLoading}
                mode='multiple'
                options={goals?.map(({ name }) => ({
                    label: GOAL_TITLE_BY_GOAL_NAME[name],
                    value: name,
                }))}
                placeholder='Цель'
                style={{ minWidth: '120px' }}
            />

            <Button>Сбросить фильтры</Button>
        </Space>
    )
}
