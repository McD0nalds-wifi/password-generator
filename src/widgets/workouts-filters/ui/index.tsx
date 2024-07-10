import { Button, Select, Space } from 'antd'

import { CATEGORY_TITLE_BY_CATEGORY_NAME, useCategoriesQuery } from '@/entities/category'
import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, useDifficultiesQuery } from '@/entities/difficulty'
import { MUSCLES_TITLE_BY_MUSCLES_NAME, useMusclesQuery } from '@/entities/muscles'

export const WorkoutsFilters = async () => {
    const { data: difficulties, isLoading: isDifficultiesLoading } = useDifficultiesQuery()
    const { data: categories, isLoading: isCategoriesLoading } = useCategoriesQuery()
    const { data: muscles, isLoading: isMusclesLoading } = useMusclesQuery()

    return (
        <Space size='middle'>
            <Select
                allowClear
                loading={isCategoriesLoading}
                mode='multiple'
                options={categories?.map(({ name }) => ({
                    label: CATEGORY_TITLE_BY_CATEGORY_NAME[name],
                    value: name,
                }))}
                placeholder='Категоия'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                loading={isDifficultiesLoading}
                mode='multiple'
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                loading={isMusclesLoading}
                mode='multiple'
                options={muscles?.map(({ name }) => ({
                    label: MUSCLES_TITLE_BY_MUSCLES_NAME[name],
                    value: name,
                }))}
                placeholder='Мышцы'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                mode='multiple'
                // options={options}
                placeholder='Цель'
                style={{ minWidth: '120px' }}
            />

            <Button>Сбросить фильтры</Button>
        </Space>
    )
}
