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
        <Sider collapsed={collapsed} collapsible onCollapse={setCollapsed}>
            <div>Logo</div>

            <Menu defaultSelectedKeys={[pathname]} mode='inline' theme='dark'>
                {MENU_ITEMS.map(({ icon, id, label, link }) => (
                    <MenuItem icon={icon} key={id} onClick={() => push(link)}>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </Sider>
    )
}
