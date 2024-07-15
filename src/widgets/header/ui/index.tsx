'use client'
import { Layout, theme } from 'antd'

import { ChangeGender } from '@/feature/gender/change-gender'

const { Header: HeaderBase } = Layout

export const Header = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <HeaderBase
            style={{
                alignItems: 'center',
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'end',
                padding: '0 16px',
            }}
        >
            <ChangeGender />
        </HeaderBase>
    )
}
