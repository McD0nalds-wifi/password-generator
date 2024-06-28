'use client'

import { Button, Divider, Select, SelectProps, Space } from 'antd'

import { WorkoutsList } from '@/widgets/workouts-list'

const options: SelectProps['options'] = []

for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    })
}

export default function Workouts() {
    return (
        <div>
            <Space size='middle'>
                <Select
                    allowClear
                    mode='multiple'
                    options={options}
                    placeholder='Сложность'
                    style={{ minWidth: '120px' }}
                />

                <Select
                    allowClear
                    mode='multiple'
                    options={options}
                    placeholder='Мышцы'
                    style={{ minWidth: '120px' }}
                />

                <Select allowClear mode='multiple' options={options} placeholder='Цель' style={{ minWidth: '120px' }} />

                <Button>Сбросить фильтры</Button>
            </Space>

            <Divider />

            <WorkoutsList />
        </div>
    )
}
