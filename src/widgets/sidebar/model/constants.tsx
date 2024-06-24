import { HomeOutlined, OrderedListOutlined } from '@ant-design/icons'

import { routes } from '@/shared/lib'

export const MENU_ITEMS_DATA = {
    home: { icon: <HomeOutlined />, id: routes.home.getRoute(), label: 'Главная', link: routes.home.getRoute() },
    workouts: {
        icon: <OrderedListOutlined />,
        id: routes.workouts.getRoute(),
        label: 'Тренировки',
        link: routes.workouts.getRoute(),
    },
} as const

export const MENU_ITEMS = [MENU_ITEMS_DATA.home, MENU_ITEMS_DATA.workouts]
