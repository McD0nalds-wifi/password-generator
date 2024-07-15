export type { Difficulty, DifficultyName } from './model/types'
export { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, DIFFICULTY_TAG_COLOR_BY_DIFFICULTY_NAME } from './lib/config'
export { getDifficultiesNamesFromSearchParams } from './lib/getDifficultiesNamesFromSearchParams'
export { useGetDifficultiesQuery, difficultiesSelectors } from './api/difficultyApi'
