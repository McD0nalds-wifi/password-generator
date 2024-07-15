import { Card, Space } from 'antd'
import Text from 'antd/lib/typography/Text'

type ExerciseDescriptionProps = {
    descriptions: Array<{ title: string; value: string }>
}

export const ExerciseDescription = ({ descriptions }: ExerciseDescriptionProps) => {
    return (
        <Card style={{ minWidth: '240px' }}>
            <Space direction='vertical'>
                {descriptions.map(({ title, value }, index) => (
                    <Space key={index}>
                        <Text type='secondary'>{title}:</Text>

                        <Text>{value}</Text>
                    </Space>
                ))}
            </Space>
        </Card>
    )
}
