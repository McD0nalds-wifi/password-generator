import { HeartOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Image, Space, Tag, TagProps, Typography } from 'antd'
import Link from 'next/link'

const { Title, Text } = Typography

type WorkoutCardProp = {
    href: string
    imageUrl: string
    tags: Array<{ color: TagProps['color']; title: string }>
    title: string
}

export const WorkoutCard = ({ href, imageUrl, tags, title }: WorkoutCardProp) => {
    return (
        <Link href={href}>
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

                <Text>Оборудование:</Text>

                <ul style={{ listStylePosition: 'inside' }}>
                    <li>Гантели</li>
                    <li>Собственный вес</li>
                    <li>Канаты</li>
                </ul>

                <Divider />

                <Space style={{ marginTop: '10px' }} wrap={true}>
                    {tags.map(({ color, title }, index) => (
                        <Tag bordered={false} color={color} key={index}>
                            {title}
                        </Tag>
                    ))}
                </Space>
            </Card>
        </Link>
    )
}
