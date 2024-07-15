import { useMemo } from 'react'

import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

import { difficultiesSelectors, getDifficultiesNamesFromSearchParams } from '@/entities/difficulty'
import { equipmentSelectors, getEquipmentNamesFromSearchParams } from '@/entities/equipment'
import { getGoalsNamesFromSearchParams, goalsSelectors } from '@/entities/goal'
import { getMusclesNamesFromSearchParams, musclesSelectors } from '@/entities/muscle'

export const useGetExercisesArgs = () => {
    const searchParams = useSearchParams()

    const difficulties = useSelector(difficultiesSelectors.selectDifficulties)
    const equipment = useSelector(equipmentSelectors.selectEquipment)
    const goals = useSelector(goalsSelectors.selectGoals)
    const muscles = useSelector(musclesSelectors.selectMuscles)

    const selectedDifficulties = useMemo(() => {
        const difficultiesNames = getDifficultiesNamesFromSearchParams(searchParams)

        if (!difficultiesNames || !difficulties) {
            return
        }

        return difficulties.filter(({ name }) => difficultiesNames.includes(name))
    }, [difficulties, searchParams])

    const selectedEquipment = useMemo(() => {
        const equipmentNames = getEquipmentNamesFromSearchParams(searchParams)

        if (!equipmentNames || !equipment) {
            return
        }

        return equipment.filter(({ name }) => equipmentNames.includes(name))
    }, [equipment, searchParams])

    const selectedGoals = useMemo(() => {
        const goalsNames = getGoalsNamesFromSearchParams(searchParams)

        if (!goalsNames || !goals) {
            return
        }

        return goals.filter(({ name }) => goalsNames.includes(name))
    }, [goals, searchParams])

    const selectedMuscles = useMemo(() => {
        const musclesNames = getMusclesNamesFromSearchParams(searchParams)

        if (!musclesNames || !muscles) {
            return
        }

        return muscles.filter(({ name }) => musclesNames.includes(name))
    }, [muscles, searchParams])

    return {
        difficulties: selectedDifficulties,
        equipment: selectedEquipment,
        goals: selectedGoals,
        muscles: selectedMuscles,
    }
}
