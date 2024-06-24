'use client'
import { Layout, theme } from 'antd'

const { Header: HeaderBase } = Layout

export const Header = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return <HeaderBase style={{ background: colorBgContainer, padding: 0 }} />
}
