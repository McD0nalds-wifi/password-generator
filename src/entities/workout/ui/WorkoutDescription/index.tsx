import { ReactNode } from 'react'

import { List, Space, Typography, theme } from 'antd'

const { Text } = Typography

type WorkoutDescriptionProps = {
    beforeSlot?: ReactNode
    descriptions: Array<{ title: string; value: string }>
}

export const WorkoutDescription = ({ beforeSlot, descriptions }: WorkoutDescriptionProps) => {
    const { token } = theme.useToken()

    return (
        <Space
            direction='vertical'
            style={{
                backgroundColor: token.colorFillAlter,
                border: `1px solid ${token.colorBorder}`,
                borderRadius: token.borderRadiusLG,
                minWidth: '240px',
                padding: 8,
            }}
        >
            {beforeSlot}

            <List
                dataSource={descriptions}
                itemLayout='horizontal'
                renderItem={({ title, value }) => (
                    <List.Item>
                        <Space>
                            <Text type='secondary'>{title}:</Text>

                            <Text>{value}</Text>
                        </Space>
                    </List.Item>
                )}
            />
        </Space>
    )
}
