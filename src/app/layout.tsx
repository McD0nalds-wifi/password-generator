import { ReactNode } from 'react'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Layout } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SITE_NAME } from '@/shared/constants/seo'
import { StoreProvider } from '@/shared/providers'
import { ContentLayout } from '@/widgets/content-layout'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    description: '',
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AntdRegistry>
                    <StoreProvider>
                        <Layout style={{ flexDirection: 'row', minHeight: '100vh' }}>
                            <Sidebar />

                            <Layout>
                                <Header />

                                <ContentLayout>{children}</ContentLayout>

                                <Footer />
                            </Layout>
                        </Layout>
                    </StoreProvider>
                </AntdRegistry>
            </body>
        </html>
    )
}
