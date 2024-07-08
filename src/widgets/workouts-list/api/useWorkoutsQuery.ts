import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'

import { Workout, mapWorkout } from '@/entities/workout'
import { db, useBoolean } from '@/shared/lib'

const workoutsCollectionRef = collection(db, 'workouts')

export const useWorkoutsQuery = () => {
    const [workouts, setWorkouts] = useState<Workout[] | null>(null)
    const { value: isLoading, setTrue: setWorkoutsLoading, setFalse: setWorkoutsLoaded } = useBoolean()
    const { value: isError, setTrue: setWorkoutsError, setFalse: resetWorkoutsError } = useBoolean()

    useEffect(() => {
        const getWorkouts = async () => {
            setWorkoutsLoading()
            resetWorkoutsError()

            try {
                const data = await getDocs(workoutsCollectionRef)
                const newData = [] as Workout[]

                for (const doc of data.docs) {
                    const workout = await mapWorkout(doc)

                    newData.push(workout)
                }

                setWorkouts(newData)
            } catch (error) {
                setWorkoutsError()
                console.log(error)
            } finally {
                setWorkoutsLoaded()
            }
        }

        getWorkouts()
    }, [resetWorkoutsError, setWorkoutsError, setWorkoutsLoaded, setWorkoutsLoading])

    return { isError, isLoading, workouts }
}
