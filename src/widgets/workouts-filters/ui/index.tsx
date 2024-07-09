import { Button, Select, Space } from 'antd'
import { collection, getDocs } from 'firebase/firestore'

import { DIFFICULTY_TITLE_BY_DIFFICULTY_NAME, Difficulty } from '@/entities/difficulty'
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

export const revalidate = 60

export const WorkoutsFilters = async () => {
    const difficulties = await getDifficulties()

    return (
        <Space size='middle'>
            <Select
                allowClear
                mode='multiple'
                options={difficulties?.map(({ name }) => ({
                    label: DIFFICULTY_TITLE_BY_DIFFICULTY_NAME[name],
                    value: name,
                }))}
                placeholder='Сложность'
                style={{ minWidth: '140px' }}
            />

            <Select
                allowClear
                mode='multiple'
                // options={options}
                placeholder='Мышцы'
                style={{ minWidth: '120px' }}
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
