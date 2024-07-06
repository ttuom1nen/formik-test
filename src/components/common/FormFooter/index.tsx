import React from 'react'
import styles from './index.module.scss'

const FormFooter = ({ children }: any) => {
    return (
        <div className={styles.formFooter}>
            {children}
        </div>
    )
}

export default FormFooter