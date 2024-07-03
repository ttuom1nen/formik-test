import React from 'react'
import styles from './index.module.scss'

interface Props {
    text: string
}

const ViewHeader = ({ text }: Props) => {
    return (
        <h2 className={styles.h2}>{text}</h2>
    )
}

export default ViewHeader