'use client'
import { useEffect, useState } from 'react'

import { Button, Flex, Select } from 'antd'
import { isEmpty } from 'lodash'
import { useRouter, useSearchParams } from 'next/navigation'
import { FlattenOptionData } from 'rc-select/lib/interface'
import { BaseOptionType } from 'rc-select/lib/Select'

import {
    DIFFICULTY_TITLE_BY_DIFFICULTY_NAME,
    DifficultyName,
    getDifficultiesNamesFromSearchParams,
    useGetDifficultiesQuery,
} from '@/entities/difficulty'
import {
    EQUIPMENT_TITLE_BY_EQUIPMENT_NAME,
    EquipmentName,
    getEquipmentNamesFromSearchParams,
    useGetEquipmentQuery,
} from '@/entities/equipment'
import { GOAL_TITLE_BY_GOAL_NAME, GoalName, getGoalsNamesFromSearchParams, useGetGoalsQuery } from '@/entities/goal'
import {
    MUSCLE_TITLE_BY_MUSCLE_NAME,
    MuscleName,
    getMusclesNamesFromSearchParams,
    useGetMusclesQuery,
} from '@/entities/muscle'
import { routes } from '@/shared/lib'

const renderOptionLabel = ({ label }: FlattenOptionData<BaseOptionType>) => (
    <div style={{ whiteSpace: 'normal' }}>{label}</div>
)

export const WorkoutsFilters = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const [selectedEquipmentNames, setSelectedEquipmentNames] = useState<EquipmentName[] | undefined>(
        getEquipmentNamesFromSearchParams(searchParams),
    )
    const [selectedDifficultiesNames, setSelectedDifficultiesNames] = useState<DifficultyName[] | undefined>(
        getDifficultiesNamesFromSearchParams(searchParams),
    )
    const [selectedMusclesNames, setSelectedMusclesNames] = useState<MuscleName[] | undefined>(
        getMusclesNamesFromSearchParams(searchParams),
    )
    const [selectedGoalsNames, setSelectedGoalsNames] = useState<GoalName[] | undefined>(
        getGoalsNamesFromSearchParams(searchParams),
    )

    const { data: difficulties, isLoading: isDifficultiesLoading } = useGetDifficultiesQuery()
    const { data: equipment, isLoading: isEquipmentLoading } = useGetEquipmentQuery()
    const { data: muscles, isLoading: isMusclesLoading } = useGetMusclesQuery()
    const { data: goals, isLoading: isGoalsLoading } = useGetGoalsQuery()

    useEffect(() => {
        push(
            routes.workouts.getRoute({
                difficultiesNames: selectedDifficultiesNames,
                equipmentNames: selectedEquipmentNames,
                goalsNames: selectedGoalsNames,
                musclesNames: selectedMusclesNames,
            }),
        )
    }, [push, selectedEquipmentNames, selectedDifficultiesNames, selectedMusclesNames, selectedGoalsNames])

    return (
        <Flex gap='middle' wrap>
            <Select
                allowClear
                loading={isEquipmentLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedEquipmentNames(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={equipment?.map(({ name }) => ({
                    label: EQUIPMENT_TITLE_BY_EQUIPMENT_NAME[name],
                    value: name,
                }))}
                placeholder='Оборудование'
                style={{ minWidth: '150px' }}
                value={isEquipmentLoading ? undefined : selectedEquipmentNames}
            />

            <Select
                allowClear
                loading={isDifficultiesLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedDifficultiesNames(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '150px' }}
                value={isDifficultiesLoading ? undefined : selectedDifficultiesNames}
            />

            <Select
                allowClear
                loading={isMusclesLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedMusclesNames(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={muscles?.map(({ name }) => ({
                    label: MUSCLE_TITLE_BY_MUSCLE_NAME[name],
                    value: name,
                }))}
                placeholder='Мышцы'
                style={{ minWidth: '150px' }}
                value={isMusclesLoading ? undefined : selectedMusclesNames}
            />

            <Select
                allowClear
                loading={isGoalsLoading}
                maxTagCount={1}
                mode='multiple'
                onChange={(value) => setSelectedGoalsNames(isEmpty(value) ? undefined : value)}
                optionRender={renderOptionLabel}
                options={goals?.map(({ name }) => ({
                    label: GOAL_TITLE_BY_GOAL_NAME[name],
                    value: name,
                }))}
                placeholder='Цель'
                style={{ minWidth: '150px' }}
                value={isGoalsLoading ? undefined : selectedGoalsNames}
            />

            <Button>Сбросить фильтры</Button>
        </Flex>
    )
}
