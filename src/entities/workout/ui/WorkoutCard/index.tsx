import { HeartOutlined } from '@ant-design/icons'
import { Button, Card, Image, Space, Tag, TagProps, Typography } from 'antd'

const { Title } = Typography

type WorkoutCardProp = {
    imageUrl: string
    tags: Array<{ color: TagProps['color']; title: string }>
    title: string
}

export const WorkoutCard = ({ imageUrl, tags, title }: WorkoutCardProp) => {
    return (
        <Card
            cover={
                <div style={{ position: 'relative' }}>
                    <Image alt='example' preview={false} src={imageUrl} />

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
            <Title level={5}>{title}</Title>

            <Space style={{ marginTop: '10px' }} wrap={true}>
                {tags.map(({ color, title }, index) => (
                    <Tag bordered={false} color={color} key={index}>
                        {title}
                    </Tag>
                ))}
            </Space>
        </Card>
    )
}
