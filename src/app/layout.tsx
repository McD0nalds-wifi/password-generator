import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { SITE_NAME } from '@/shared/constants/seo'

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
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
