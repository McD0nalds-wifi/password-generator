'use client'
import { useEffect, useState } from 'react'

import { Button, Flex, Select } from 'antd'
import { isEmpty } from 'lodash'
import { useRouter, useSearchParams } from 'next/navigation'
import { FlattenOptionData } from 'rc-select/lib/interface'
import { BaseOptionType } from 'rc-select/lib/Select'

import { CATEGORY_TITLE_BY_CATEGORY_NAME, CategoryName, useCategoriesQuery } from '@/entities/category'
import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, DifficultyName, useDifficultiesQuery } from '@/entities/difficulty'
import { GOAL_TITLE_BY_GOAL_NAME, GoalName, useGoalsQuery } from '@/entities/goal'
import { MUSCLE_TITLE_BY_MUSCLE_NAME, MuscleName, useMusclesQuery } from '@/entities/muscle'
import { routes } from '@/shared/lib'

import { getDefaultSelectedCategories } from '../lib/getDefaultSelectedCategories'
import { getDefaultSelectedDifficulties } from '../lib/getDefaultSelectedDifficulties'
import { getDefaultSelectedGoals } from '../lib/getDefaultSelectedGoals'
import { getDefaultSelectedMuscles } from '../lib/getDefaultSelectedMuscles'

const renderOptionLabel = ({ label }: FlattenOptionData<BaseOptionType>) => (
    <div style={{ whiteSpace: 'normal' }}>{label}</div>
)

export const WorkoutsFilters = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const [selectedCategories, setSelectedCategories] = useState<CategoryName[] | undefined>(
        getDefaultSelectedCategories(searchParams),
    )
    const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyName[] | undefined>(
        getDefaultSelectedDifficulties(searchParams),
    )
    const [selectedMuscles, setSelectedMuscles] = useState<MuscleName[] | undefined>(
        getDefaultSelectedMuscles(searchParams),
    )
    const [selectedGoals, setSelectedGoals] = useState<GoalName[] | undefined>(getDefaultSelectedGoals(searchParams))

    const { data: difficulties, isLoading: isDifficultiesLoading } = useDifficultiesQuery()
    const { data: categories, isLoading: isCategoriesLoading } = useCategoriesQuery()
    const { data: muscles, isLoading: isMusclesLoading } = useMusclesQuery()
    const { data: goals, isLoading: isGoalsLoading } = useGoalsQuery()

    useEffect(() => {
        push(
            routes.workouts.getRoute({
                categories: selectedCategories,
                difficulties: selectedDifficulties,
                goals: selectedGoals,
                muscles: selectedMuscles,
            }),
        )
    }, [push, selectedCategories, selectedDifficulties, selectedMuscles, selectedGoals])

    return (
        <Flex gap='middle' wrap>
            <Select
                allowClear
                loading={isCategoriesLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedCategories(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={categories?.map(({ name }) => ({
                    label: CATEGORY_TITLE_BY_CATEGORY_NAME[name],
                    value: name,
                }))}
                placeholder='Категоия'
                style={{ minWidth: '150px' }}
                value={isCategoriesLoading ? undefined : selectedCategories}
            />

            <Select
                allowClear
                loading={isDifficultiesLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedDifficulties(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '150px' }}
                value={isDifficultiesLoading ? undefined : selectedDifficulties}
            />

            <Select
                allowClear
                loading={isMusclesLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedMuscles(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={muscles?.map(({ name }) => ({
                    label: MUSCLE_TITLE_BY_MUSCLE_NAME[name],
                    value: name,
                }))}
                placeholder='Мышцы'
                style={{ minWidth: '150px' }}
                value={isMusclesLoading ? undefined : selectedMuscles}
            />

            <Select
                allowClear
                loading={isGoalsLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedGoals(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={goals?.map(({ name }) => ({
                    label: GOAL_TITLE_BY_GOAL_NAME[name],
                    value: name,
                }))}
                placeholder='Цель'
                style={{ minWidth: '150px' }}
                value={isGoalsLoading ? undefined : selectedGoals}
            />

            <Button>Сбросить фильтры</Button>
        </Flex>
    )
}
