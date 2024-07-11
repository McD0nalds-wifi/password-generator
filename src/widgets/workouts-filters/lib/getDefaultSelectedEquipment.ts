import { ReadonlyURLSearchParams } from 'next/navigation'

import { EquipmentName } from '@/entities/equipment'

export const getDefaultSelectedEquipment = (searchParams: ReadonlyURLSearchParams) => {
    const selectedEquipment = searchParams.get('equipment')

    if (!selectedEquipment) {
        return
    }

    return JSON.parse(selectedEquipment) as EquipmentName[]
}
