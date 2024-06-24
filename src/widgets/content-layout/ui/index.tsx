'use client'
import { ReactNode } from 'react'

import { Breadcrumb, Layout, theme } from 'antd'

const { Content } = Layout

type ContentLayoutProps = {
    children: ReactNode
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb items={[{ title: 'User' }, { title: 'Bill' }]} style={{ margin: '16px 0' }} />

            <div
                style={{
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    minHeight: 360,
                    padding: 24,
                }}
            >
                {children}
            </div>
        </Content>
    )
}
