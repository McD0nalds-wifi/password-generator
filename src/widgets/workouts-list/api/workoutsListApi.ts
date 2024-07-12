import { QueryFieldFilterConstraint, doc } from '@firebase/firestore'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { Difficulty } from '@/entities/difficulty'
import { Equipment } from '@/entities/equipment'
import { Goal } from '@/entities/goal'
import { Muscle } from '@/entities/muscle'
import { Workout, mapWorkout } from '@/entities/workout'
import { api } from '@/shared/api'
import { db } from '@/shared/lib'

type WorkoutArgs = {
    difficulties?: Difficulty[]
    equipment?: Equipment[]
    goals?: Goal[]
    muscles?: Muscle[]
}

export const workoutsListApi = api.injectEndpoints({
    endpoints: (build) => ({
        workouts: build.query<Workout[], WorkoutArgs>({
            queryFn: async (args) => {
                try {
                    const ref = collection(db, 'workouts')

                    const queryConstraints: QueryFieldFilterConstraint[] = []

                    if (args?.difficulties) {
                        queryConstraints.push(
                            where(
                                'difficulty',
                                'in',
                                args.difficulties.map(({ id }) => doc(db, 'difficulties', id)),
                            ),
                        )
                    }

                    if (args?.equipment) {
                        queryConstraints.push(
                            where(
                                'equipment',
                                'array-contains-any',
                                args.equipment.map(({ id }) => doc(db, 'equipment', id)),
                            ),
                        )
                    }

                    if (args?.goals) {
                        queryConstraints.push(
                            where(
                                'goal',
                                'in',
                                args.goals.map(({ id }) => doc(db, 'goals', id)),
                            ),
                        )
                    }

                    // TODO Add field in DB
                    // if (args?.muscles) {
                    //     queryConstraints.push(
                    //         where(
                    //             'muscles',
                    //             'in',
                    //             args.muscles.map(({ id }) => doc(db, 'muscles', id)),
                    //         ),
                    //     )
                    // }

                    const querySnapshot = await getDocs(query(ref, ...queryConstraints))

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
