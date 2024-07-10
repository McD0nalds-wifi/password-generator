import { Button, Select, Space } from 'antd'
import { collection, getDocs } from 'firebase/firestore'

import { CATEGORY_TITLE_BY_CATEGORY_NAME, Category } from '@/entities/category'
import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, Difficulty } from '@/entities/difficulty'
import { MUSCLES_TITLE_BY_MUSCLES_NAME, Muscles } from '@/entities/muscles'
import { db } from '@/shared/lib'

const getDifficulties = async () => {
    const ref = collection(db, 'difficulties')
    const querySnapshot = await getDocs(ref)

    return querySnapshot.docs.reduce<Difficulty[]>((acc, doc) => {
        const data = doc.data()

        acc.push({ ...data, id: doc.id } as Difficulty)

        return acc
    }, [])
}

const getCategories = async () => {
    const ref = collection(db, 'categories')
    const querySnapshot = await getDocs(ref)

    return querySnapshot.docs.reduce<Category[]>((acc, doc) => {
        const data = doc.data()

        acc.push({ ...data, id: doc.id } as Category)

        return acc
    }, [])
}

const getMuscles = async () => {
    const ref = collection(db, 'muscles')
    const querySnapshot = await getDocs(ref)

    return querySnapshot.docs.reduce<Muscles[]>((acc, doc) => {
        const data = doc.data()

        acc.push({ ...data, id: doc.id } as Muscles)

        return acc
    }, [])
}

export const revalidate = 60

export const WorkoutsFilters = async () => {
    const difficulties = await getDifficulties()
    const categories = await getCategories()
    const muscles = await getMuscles()

    console.log(muscles)

    return (
        <Space size='middle'>
            <Select
                allowClear
                mode='multiple'
                options={categories?.map(({ name }) => ({
                    label: CATEGORY_TITLE_BY_CATEGORY_NAME[name],
                    value: name,
                }))}
                placeholder='Категоия'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                mode='multiple'
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                mode='multiple'
                options={muscles?.map(({ name }) => ({
                    label: MUSCLES_TITLE_BY_MUSCLES_NAME[name],
                    value: name,
                }))}
                placeholder='Мышцы'
                style={{ minWidth: '150px' }}
            />

            <Select
                allowClear
                mode='multiple'
                // options={options}
                placeholder='Цель'
                style={{ minWidth: '120px' }}
            />

            <Button>Сбросить фильтры</Button>
        </Space>
    )
}

// export async function getStaticProps() {
//     // const res = await fetch('https://.../posts')
//     // const posts = await res.json()
//
//     const ref = collection(db, 'difficulties')
//
//     const querySnapshot = await getDocs(ref)
//
//     const difficulties = querySnapshot.docs.reduce<Difficulty[]>((acc, doc) => {
//         const data = doc.data()
//
//         acc.push({ ...data, id: doc.id } as Difficulty)
//
//         return acc
//     }, [])
//
//     console.log(difficulties, 'difficulties')
//
//     return {
//         props: {
//             difficulties,
//         },
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         revalidate: 10, // In seconds
//     }
// }
