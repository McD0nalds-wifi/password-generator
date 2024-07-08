import { HeartOutlined } from '@ant-design/icons'
import { Button, Card, Image, Space, Tag, TagProps, Typography } from 'antd'
import Link from 'next/link'

import { Difficulty } from '@/entities/exercises'

import { Equipment, GoalType } from '../../model/types'

const { Title, Text } = Typography

type WorkoutCardProp = {
    difficulty: Difficulty
    equipment: Equipment[]
    goalType: GoalType
    href: string
    imageUrl: string
    title: string
}

const DIFFICULTY_TAG_DATA_BY_DIFFICULTY_NAME: Record<Difficulty, { color: TagProps['color']; title: string }> = {
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

const GOAL_TYPE_TAG_DATA_BY_GOAL_TYPE_NAME: Record<GoalType, { color: TagProps['color']; title: string }> = {
    gainMuscle: {
        color: 'success',
        title: 'Набор массы',
    },
}

const EQUIPMENTS_NAMES: Record<Equipment, string> = {
    dumbbells: 'Гантели',
}

export const WorkoutCard = ({ difficulty, equipment, goalType, href, imageUrl, title }: WorkoutCardProp) => {
    const difficultyTagData = DIFFICULTY_TAG_DATA_BY_DIFFICULTY_NAME[difficulty]
    const goalTypeTagData = GOAL_TYPE_TAG_DATA_BY_GOAL_TYPE_NAME[goalType]

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

                            <Tag bordered={false} color={goalTypeTagData.color}>
                                {goalTypeTagData.title}
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
                style={{ height: '100%' }}
            >
                <Title level={5}>{title}</Title>

                <Text>Оборудование:</Text>

                <ul style={{ listStylePosition: 'inside' }}>
                    {equipment.map((item) => (
                        <li key={item}>{EQUIPMENTS_NAMES[item]}</li>
                    ))}
                </ul>
            </Card>
        </Link>
    )
}
