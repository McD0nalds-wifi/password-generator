import { TagProps } from 'antd'

import { DifficultyName } from '../model/types'

export const DIFFICULTY_TITLE_BY_DIFFICULTY_NAME: Record<DifficultyName, string> = {
    advanced: 'Продвинутый',
    beginner: 'Начинающий',
    intermediate: 'Средний',
    novice: 'Нет опыта',
}

export const DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME: Record<DifficultyName, TagProps['color']> = {
    advanced: 'error',
    beginner: 'processing',
    intermediate: 'warning',
    novice: 'success',
}
