'use client'
import { useState } from 'react'

import { InputNumber } from '@/shared/uikit'

export const PasswordFilters = () => {
    const [value, setValue] = useState('0')

    return (
        <div style={{ width: '160px' }}>
            <InputNumber label='Заглавные' onChange={setValue} value={value} />
        </div>
    )
}
