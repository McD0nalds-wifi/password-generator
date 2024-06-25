import { WorkoutCard } from '@/entities/workout'

const data = [
    {
        imageUrl: 'https://media.musclewiki.com/media/uploads/singledbworkout.jpg',
        tags: [
            { color: 'lime', title: 'Начинающий' },
            { color: 'volcano', title: 'Набор массы' },
        ],
        title: 'Тренировка с 1 гантелью',
    },
    {
        imageUrl: 'https://media.musclewiki.com/media/uploads/adv_kb.jpg',
        tags: [
            { color: 'red', title: 'Продвинутый' },
            { color: 'volcano', title: 'Набор массы' },
        ],
        title: 'Продвинутая тренировка с гирями',
    },
]

export const WorkoutsList = () => {
    return (
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            {data.map(({ imageUrl, tags, title }, index) => (
                <WorkoutCard imageUrl={imageUrl} key={index} tags={tags} title={title} />
            ))}
        </div>
    )
}
