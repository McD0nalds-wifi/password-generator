import { WorkoutCard } from '@/entities/workout'
import { routes } from '@/shared/lib'

const data = [
    {
        id: '1',
        imageUrl: 'https://media.musclewiki.com/media/uploads/singledbworkout.jpg',
        tags: [
            { color: 'lime', title: 'Начинающий' },
            { color: 'volcano', title: 'Набор массы' },
        ],
        title: 'Тренировка с 1 гантелью',
    },
    {
        id: '2',
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
            {data.map(({ id, imageUrl, tags, title }, index) => (
                <WorkoutCard
                    href={routes.workout.getRoute(id)}
                    imageUrl={imageUrl}
                    key={index}
                    tags={tags}
                    title={title}
                />
            ))}
        </div>
    )
}
