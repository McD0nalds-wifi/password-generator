import { Space } from 'antd'
import { collection, getDocs, query } from 'firebase/firestore'

import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME } from '@/entities/difficulty'
import { ExerciseContent, ExerciseDescription, getExercise } from '@/entities/exercise'
import { FORCE_TITLE_BY_FORCE_NAME } from '@/entities/forces'
import { GRIP_TITLE_BY_GRIP_NAME } from '@/entities/grips'
import { db } from '@/shared/lib'

type ExercisePageProps = {
    params: {
        id: string
    }
}

export const generateStaticParams = async () => {
    const ref = collection(db, 'exercises')

    const querySnapshot = await getDocs(query(ref))

    return querySnapshot.docs.map((doc) => ({
        slug: doc.id,
    }))
}

export const revalidate = 60

export default async function ExercisePage({ params: { id } }: ExercisePageProps) {
    const { maleMedia, steps, difficulty, force, grips, mechanic } = await getExercise(id)

    return (
        <Space align='start' size='middle'>
            <ExerciseContent
                mediaList={maleMedia.map(({ previewId, videoId }) => ({
                    posterUrl: `https://media.musclewiki.com/media/uploads/${previewId}.jpg`,
                    videoUrl: `https://media.musclewiki.com/media/uploads/videos/branded/${videoId}.mp4`,
                }))}
                steps={steps}
            />

            <ExerciseDescription
                descriptions={[
                    { title: 'Сложность', value: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[difficulty.name] },
                    { title: 'Усилие', value: FORCE_TITLE_BY_FORCE_NAME[force.name] },
                    ...grips.map(({ name }) => ({
                        title: 'Хватка',
                        value: GRIP_TITLE_BY_GRIP_NAME[name],
                    })),
                    { title: 'Mechanic', value: mechanic.name },
                ]}
            />
        </Space>
    )
}
