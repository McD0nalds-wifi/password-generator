'use client'
import { Layout } from 'antd'

const { Footer: FooterBase } = Layout

export const Footer = () => {
    return (
        <FooterBase style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </FooterBase>
    )
}
