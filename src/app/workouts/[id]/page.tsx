import { collection, getDocs, query } from 'firebase/firestore'

import { WorkoutSteps, getWorkout } from '@/entities/workout'
import { db } from '@/shared/lib'

type WorkoutPageProps = {
    params: {
        id: string
    }
}

export const generateStaticParams = async () => {
    const ref = collection(db, 'workouts')

    const querySnapshot = await getDocs(query(ref))

    return querySnapshot.docs.map((doc) => ({
        slug: doc.id,
    }))
}

export const revalidate = 60

export default async function WorkoutPage({ params: { id } }: WorkoutPageProps) {
    const { difficulty, equipment, exercises, goal, name, previewImageId } = await getWorkout(id)

    return (
        <WorkoutSteps
            difficulty={difficulty}
            equipment={equipment}
            exercises={exercises}
            goal={goal}
            name={name}
            previewImageId={previewImageId}
        />
    )
}
