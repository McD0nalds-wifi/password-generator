import { Card, Skeleton } from 'antd'

export const SkeletonCard = () => {
    return (
        <Card
            cover={<Skeleton.Input active={true} block style={{ height: '140px' }} />}
            hoverable
            loading
            style={{ height: '100%' }}
        />
    )
}
