import { Card, Skeleton } from 'antd'

export const SkeletonWorkoutCard = () => {
    return (
        <Card
            cover={<Skeleton.Image active={true} style={{ height: '140px', width: '100%' }} />}
            hoverable
            loading
            style={{ height: '100%' }}
        />
    )
}
