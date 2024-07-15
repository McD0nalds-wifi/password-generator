import { HeartOutlined } from '@ant-design/icons'
import { Button, Card, Image, Space, Tag, TagProps, Typography } from 'antd'
import Link from 'next/link'

import { Difficulty, DifficultyName } from '@/entities/difficulty'
import { Equipment, EquipmentName } from '@/entities/equipment'
import { Goal, GoalName } from '@/entities/goal'

const { Meta } = Card

const { Text } = Typography

type WorkoutCardProp = {
    difficulty: Difficulty
    equipment: Equipment[]
    goal: Goal
    href: string
    imageUrl: string
    title: string
}

const DIFFICULTY_TAG_DATA_BY_DIFFICULTY_NAME: Record<DifficultyName, { color: TagProps['color']; title: string }> = {
    advanced: {
        color: 'error',
        title: 'Опытный',
    },
    beginner: {
        color: 'processing',
        title: 'Начинающий',
    },
    intermediate: {
        color: 'warning',
        title: 'Средний',
    },
    novice: {
        color: 'success',
        title: 'Новичок',
    },
}

// @ts-ignore
const GOAL_TAG_DATA_BY_GOAL_NAME: Record<GoalName, { color: TagProps['color']; title: string }> = {
    gainMuscle: {
        color: 'success',
        title: 'Набор массы',
    },
}

// @ts-ignore
const EQUIPMENTS_NAMES: Record<EquipmentName, string> = {
    dumbbells: 'Гантели',
}

export const WorkoutCard = ({ difficulty, equipment, goal, href, imageUrl, title }: WorkoutCardProp) => {
    const difficultyTagData = DIFFICULTY_TAG_DATA_BY_DIFFICULTY_NAME[difficulty.name]
    const goalTagData = GOAL_TAG_DATA_BY_GOAL_NAME[goal.name]

    return (
        <Link href={href}>
            <Card
                cover={
                    <div style={{ position: 'relative' }}>
                        <Image alt='Workout preview' preview={false} src={imageUrl} />

                        <Space style={{ left: 8, position: 'absolute', top: 8 }} wrap={true}>
                            <Tag bordered={false} color={difficultyTagData.color}>
                                {difficultyTagData.title}
                            </Tag>

                            <Tag bordered={false} color={goalTagData.color}>
                                {goalTagData.title}
                            </Tag>
                        </Space>

                        <Button
                            icon={<HeartOutlined />}
                            shape='circle'
                            style={{ position: 'absolute', right: 8, top: 8 }}
                            type='default'
                        />
                    </div>
                }
                hoverable
            >
                <Meta style={{ marginBottom: '12px' }} title={title} />

                <div style={{ marginBottom: '4px' }}>
                    <Text>Оборудование:</Text>
                </div>

                <Space direction='vertical'>
                    {equipment.map(({ name, id }) => (
                        <div key={id} style={{ display: 'flex', gap: '8px' }}>
                            {/* TODO Add icon */}
                            {/*<MedicineBallIcon />*/}

                            <Text>{EQUIPMENTS_NAMES[name]}</Text>
                        </div>
                    ))}
                </Space>
            </Card>
        </Link>
    )
}
