import { ReadonlyURLSearchParams } from 'next/navigation'

import { MuscleName } from '../model/types'

export const getMusclesNamesFromSearchParams = (searchParams: ReadonlyURLSearchParams) => {
    const musclesNames = searchParams.get('musclesNames')

    if (!musclesNames) {
        return
    }

    return JSON.parse(musclesNames) as MuscleName[]
}
