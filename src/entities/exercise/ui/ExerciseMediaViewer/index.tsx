'use client'
import { Col, Row } from 'antd'
import { useSelector } from 'react-redux'

import { genderSelectors } from '@/entities/gender'
import { Video } from '@/shared/ui'

import { ExerciseMedia } from '../../model/types'

type ExerciseMediaViewerProps = {
    femaleMedia: ExerciseMedia[]
    maleMedia: ExerciseMedia[]
}

export const ExerciseMediaViewer = ({ femaleMedia, maleMedia }: ExerciseMediaViewerProps) => {
    const gender = useSelector(genderSelectors.selectGender)

    const media = gender === 'male' ? maleMedia : femaleMedia

    return (
        <>
            <Row gutter={8}>
                {media.map(({ previewId, videoId }) => (
                    <Col key={videoId} span={12}>
                        <Video
                            poster={`https://media.musclewiki.com/media/uploads/${previewId}.jpg`}
                            src={`https://media.musclewiki.com/media/uploads/videos/branded/${videoId}.mp4`}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}
