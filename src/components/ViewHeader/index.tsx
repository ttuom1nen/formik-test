import React from 'react'
import styles from './index.module.scss'
import { Spinner } from 'react-bootstrap'

interface Props {
    text: string
    loading?: boolean
}

const ViewHeader = ({ text, loading }: Props) => {
    return (
        <div className={styles.titleContainer}>{text ? <h2>{text}</h2> : null}
            {loading &&
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
        </div>
    )
}

export default ViewHeader