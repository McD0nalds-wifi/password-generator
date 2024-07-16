import { ReactNode } from 'react'

import { HeartOutlined } from '@ant-design/icons'
import { Card as BaseCard, Button, Image, Space, Tag, TagProps, Typography } from 'antd'
import Link from 'next/link'

const { Meta } = BaseCard

const { Text } = Typography

type CardProps = {
    descriptions: { icon: ReactNode; title: string }[]
    href: string
    imageUrl: string
    tags: { color: TagProps['color']; title: string }[]
    title: string
}

export const Card = ({ descriptions, href, tags, title }: CardProps) => {
    return (
        <Link href={href}>
            <BaseCard
                cover={
                    <div
                        style={{
                            backgroundColor: 'lightgreen',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '30px 0px',
                            position: 'relative',
                        }}
                    >
                        <Image
                            alt='Workout preview'
                            height='100px'
                            preview={false}
                            src='https://cdn-icons-png.flaticon.com/512/3485/3485579.png'
                            width='100px'
                        />

                        <Space style={{ left: 8, position: 'absolute', top: 8 }} wrap={true}>
                            {tags.map(({ color, title }, index) => (
                                <Tag bordered={false} color={color} key={index}>
                                    {title}
                                </Tag>
                            ))}
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
                    {descriptions.map(({ icon, title }, index) => (
                        <div key={index} style={{ display: 'flex', gap: '8px' }}>
                            {icon}

                            <Text>{title}</Text>
                        </div>
                    ))}
                </Space>
            </BaseCard>
        </Link>
    )
}
