import React from 'react'
import styles from './extraLabel.module.scss'

interface Props {
    text: string
}

const ExtraLabel = ( { text }: Props) => {
    return (
        <p className={styles.extraLabel}>{text}</p>
    )
}

export default ExtraLabel