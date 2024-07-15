import { TagProps } from 'antd'

import { GoalName } from '../model/types'

export const GOAL_TITLE_BY_GOAL_NAME: Record<GoalName, string> = {
    gainMuscle: 'Набор мышечной массы ',
    getStronger: 'Стать сильнее',
    loseBodyFat: 'Сбросить лишний вес',
}

export const GOAL_TAG_COLOR_BY_GOAL_NAME: Record<GoalName, TagProps['color']> = {
    gainMuscle: 'success',
    getStronger: 'processing',
    loseBodyFat: 'warning',
}
