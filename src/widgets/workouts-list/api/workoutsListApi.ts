import { collection, getDocs } from 'firebase/firestore'

import { Workout, mapWorkout } from '@/entities/workout'
import { api } from '@/shared/api'
import { db } from '@/shared/lib'

export const workoutsListApi = api.injectEndpoints({
    endpoints: (build) => ({
        workouts: build.query<Workout[], void>({
            queryFn: async () => {
                try {
                    const ref = collection(db, 'workouts')
                    // const q = query(workoutsCollectionRef, where('difficulty', '==', 'beginner'))

                    const querySnapshot = await getDocs(ref)

                    const workouts: Workout[] = []

                    for (const doc of querySnapshot.docs) {
                        const workout = await mapWorkout(doc)

                        workouts.push(workout)
                    }

                    return { data: workouts }
                } catch (e) {
                    console.error(e)

                    return { error: e }
                }
            },
        }),
    }),
})

export const { useWorkoutsQuery } = workoutsListApi
