import { CSSProperties } from 'react'

import { Card, Space } from 'antd'
import Text from 'antd/lib/typography/Text'

import { ExerciseMedia } from '../../model/types'
import { ExerciseMediaViewer } from '../ExerciseMediaViewer'

type ExerciseContentProps = {
    femaleMedia: ExerciseMedia[]
    maleMedia: ExerciseMedia[]
    steps: Array<string>
}

export const ExerciseContent = ({ femaleMedia, maleMedia, steps }: ExerciseContentProps) => {
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
        <Card>
            <Space direction='vertical' size='middle'>
                <ExerciseMediaViewer femaleMedia={femaleMedia} maleMedia={maleMedia} />

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
        </Card>
    )
}
