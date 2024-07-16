import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { GENDER_LOCAL_STORAGE_NAME } from './constants'
import { Gender } from './types'

// (window.localStorage.getItem(GENDER_LOCAL_STORAGE_NAME) as Gender) || 'male'
const DEFAULT_GENDER = 'male'

export const genderSlice = createSlice({
    initialState: DEFAULT_GENDER,
    name: 'gender',
    reducers: {
        changeGender: (state, action: PayloadAction<Gender>) => {
            window.localStorage.setItem(GENDER_LOCAL_STORAGE_NAME, action.payload)

            return action.payload
        },
    },
    selectors: {
        selectGender: (sliceState) => sliceState,
    },
})

export const genderActions = genderSlice.actions
export const genderSelectors = genderSlice.selectors
