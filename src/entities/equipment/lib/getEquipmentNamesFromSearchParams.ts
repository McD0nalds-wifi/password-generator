import { ReadonlyURLSearchParams } from 'next/navigation'

import { EquipmentName } from '../model/types'

export const getEquipmentNamesFromSearchParams = (searchParams: ReadonlyURLSearchParams) => {
    const equipmentNames = searchParams.get('equipmentNames')

    if (!equipmentNames) {
        return
    }

    return JSON.parse(equipmentNames) as EquipmentName[]
}
