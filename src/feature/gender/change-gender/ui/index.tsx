'use client'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { genderActions, genderSelectors } from '@/entities/gender'

export const ChangeGender = () => {
    const dispatch = useDispatch()

    const gender = useSelector(genderSelectors.selectGender)

    const handleChange = (checked: boolean) => {
        dispatch(genderActions.changeGender(checked ? 'male' : 'female'))
    }

    return (
        <Switch
            checkedChildren={<ManOutlined />}
            onChange={handleChange}
            unCheckedChildren={<WomanOutlined />}
            value={gender === 'male'}
        />
    )
}
