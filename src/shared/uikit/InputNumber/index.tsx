'use client'
import { ChangeEvent, ReactNode, useRef } from 'react'

import { isEmpty, isNaN, isNumber } from 'lodash'

import { useBoolean } from '@/shared/hooks/useBoolean'

import styles from './index.module.css'

const BLOCK_WIDTH = 30

interface IInputNumber {
    label: ReactNode
    onChange: (value: string) => void
    value: string
}

export const InputNumber = ({ label, value, onChange }: IInputNumber) => {
    const lineRef = useRef<HTMLDivElement>(null)

    const { value: isHover, setTrue: handleMouseEnter, setFalse: handleMouseLeave } = useBoolean()
    const { value: isEditMode, setTrue: setEditMode, setFalse: setViewMode } = useBoolean()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        if (isEmpty(value)) {
            onChange('')
            return
        }

        if (!isNumber(Number(value)) || isNaN(Number(value))) {
            return
        }

        onChange(value)
    }

    const handleSetViewMode = () => {
        if (isEmpty(value)) {
            onChange('0')
        }

        setViewMode()
    }

    return (
        <div>
            <p className={styles.label}>{label}</p>

            <div className={styles.line} ref={lineRef}>
                <div
                    className={styles.block}
                    onClick={setEditMode}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: isEditMode ? lineRef.current?.offsetWidth : isHover ? BLOCK_WIDTH + 10 : BLOCK_WIDTH,
                    }}
                >
                    {isEditMode ? (
                        <form
                            onSubmit={(event) => {
                                event.preventDefault()

                                handleSetViewMode()
                            }}
                        >
                            <input
                                autoFocus
                                className={styles.input}
                                onBlur={handleSetViewMode}
                                onChange={handleInputChange}
                                type='text'
                                value={value}
                            />
                        </form>
                    ) : (
                        <div className={styles.value}>{value}</div>
                    )}
                </div>
            </div>
        </div>
    )
}
