'use client'
import { useEffect, useState } from 'react'

import { Button, Flex, Select } from 'antd'
import { isEmpty } from 'lodash'
import { useRouter, useSearchParams } from 'next/navigation'
import { FlattenOptionData } from 'rc-select/lib/interface'
import { BaseOptionType } from 'rc-select/lib/Select'

import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, DifficultyName, useDifficultiesQuery } from '@/entities/difficulty'
import { EQUIPMENT_TITLE_BY_EQUIPMENT_NAME, EquipmentName, useEquipmentQuery } from '@/entities/equipment'
import { GOAL_TITLE_BY_GOAL_NAME, GoalName, useGoalsQuery } from '@/entities/goal'
import { MUSCLE_TITLE_BY_MUSCLE_NAME, MuscleName, useMusclesQuery } from '@/entities/muscle'
import { routes } from '@/shared/lib'

import { getDefaultSelectedDifficulties } from '../lib/getDefaultSelectedDifficulties'
import { getDefaultSelectedEquipment } from '../lib/getDefaultSelectedEquipment'
import { getDefaultSelectedGoals } from '../lib/getDefaultSelectedGoals'
import { getDefaultSelectedMuscles } from '../lib/getDefaultSelectedMuscles'

const renderOptionLabel = ({ label }: FlattenOptionData<BaseOptionType>) => (
    <div style={{ whiteSpace: 'normal' }}>{label}</div>
)

export const WorkoutsFilters = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const [selectedEquipment, setSelectedEquipment] = useState<EquipmentName[] | undefined>(
        getDefaultSelectedEquipment(searchParams),
    )
    const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyName[] | undefined>(
        getDefaultSelectedDifficulties(searchParams),
    )
    const [selectedMuscles, setSelectedMuscles] = useState<MuscleName[] | undefined>(
        getDefaultSelectedMuscles(searchParams),
    )
    const [selectedGoals, setSelectedGoals] = useState<GoalName[] | undefined>(getDefaultSelectedGoals(searchParams))

    const { data: difficulties, isLoading: isDifficultiesLoading } = useDifficultiesQuery()
    const { data: equipment, isLoading: isEquipmentLoading } = useEquipmentQuery()
    const { data: muscles, isLoading: isMusclesLoading } = useMusclesQuery()
    const { data: goals, isLoading: isGoalsLoading } = useGoalsQuery()

    useEffect(() => {
        push(
            routes.workouts.getRoute({
                difficulties: selectedDifficulties,
                equipment: selectedEquipment,
                goals: selectedGoals,
                muscles: selectedMuscles,
            }),
        )
    }, [push, selectedEquipment, selectedDifficulties, selectedMuscles, selectedGoals])

    return (
        <Flex gap='middle' wrap>
            <Select
                allowClear
                loading={isEquipmentLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedEquipment(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={equipment?.map(({ name }) => ({
                    label: EQUIPMENT_TITLE_BY_EQUIPMENT_NAME[name],
                    value: name,
                }))}
                placeholder='Оборудование'
                style={{ minWidth: '150px' }}
                value={isEquipmentLoading ? undefined : selectedEquipment}
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
