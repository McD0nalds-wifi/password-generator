export type Equipment = {
    id: string
    name: EquipmentName
}

export type EquipmentName =
    | 'barbell'
    | 'dumbbells'
    | 'bodyweight'
    | 'machine'
    | 'kettlebells'
    | 'cables'
    | 'band'
    | 'smithMachine'
