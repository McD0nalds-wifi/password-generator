import { CSSProperties } from 'react'

import { Space, Typography, theme } from 'antd'

import { Video } from '@/shared/ui'

const { Text } = Typography

type WorkoutContentProps = {
    mediaList: Array<{ posterUrl: string; videoUrl: string }>
    steps: Array<string>
}

export const WorkoutContent = ({ mediaList, steps }: WorkoutContentProps) => {
    const { token } = theme.useToken()

    const contentStyle: CSSProperties = {
        backgroundColor: token.colorFillAlter,
        border: `1px solid ${token.colorBorder}`,
        borderRadius: token.borderRadiusLG,
        padding: 8,
    }

    const listNumberStyle: CSSProperties = {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        borderRadius: '50%',
        display: 'flex',
        height: '32px',
        justifyContent: 'center',
        width: '32px',
    }

    return (
        <Space direction='vertical' size='middle' style={contentStyle}>
            <Space>
                {mediaList.map(({ posterUrl, videoUrl }, index) => (
                    <Video key={index} poster={posterUrl} src={videoUrl} />
                ))}
            </Space>

            <Space direction='vertical'>
                {steps.map((step, index) => (
                    <Space key={index}>
                        <div style={listNumberStyle}>
                            <Text>{index + 1}</Text>
                        </div>

                        <Text>{step}</Text>
                    </Space>
                ))}
            </Space>
        </Space>
    )
}
