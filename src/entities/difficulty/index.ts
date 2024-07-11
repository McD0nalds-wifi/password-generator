export type { Difficulty, DifficultyName } from './model/types'
export { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME } from './lib/config'
export { getDifficultiesNamesFromSearchParams } from './lib/getDifficultiesNamesFromSearchParams'
export { useDifficultiesQuery, difficultiesSelectors } from './api/difficultyApi'
