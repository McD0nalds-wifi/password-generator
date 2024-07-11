import { ReadonlyURLSearchParams } from 'next/navigation'

import { CategoryName } from '@/entities/category'

export const getDefaultSelectedCategories = (searchParams: ReadonlyURLSearchParams) => {
    const selectedCategories = searchParams.get('categories')

    if (!selectedCategories) {
        return
    }

    return JSON.parse(selectedCategories) as CategoryName[]
}
