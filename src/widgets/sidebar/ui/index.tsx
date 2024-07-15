'use client'
import { Layout, Menu } from 'antd'
import { usePathname, useRouter } from 'next/navigation'

import { useBoolean } from '@/shared/lib'

import { MENU_ITEMS } from '../model/constants'

const { Sider } = Layout

const { Item: MenuItem } = Menu

export const Sidebar = () => {
    const { push } = useRouter()
    const pathname = usePathname()

    const { value: collapsed, setValue: setCollapsed } = useBoolean(false)

    return (
        <Sider
            collapsed={collapsed}
            collapsible
            onCollapse={setCollapsed}
            style={{ outline: '1px solid rgba(5, 5, 5, 0.06)' }}
            theme='light'
        >
            <div style={{ padding: '8px' }}>Logo</div>

            <Menu defaultSelectedKeys={[pathname]} mode='inline' style={{ borderInlineEnd: 'none' }} theme='light'>
                {MENU_ITEMS.map(({ icon, id, label, link }) => (
                    <MenuItem icon={icon} key={id} onClick={() => push(link)}>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </Sider>
    )
}
