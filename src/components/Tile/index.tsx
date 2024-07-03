import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import Spinner from 'react-bootstrap/Spinner';

type Props = {
  title?: string
  loading?: boolean
  children?: ReactNode
}

const Tile = ({ title, loading, children }: Props) => {
  return (
    <div className={styles.tile}>
      <div className={styles.titleContainer}>{title ? <h3>{title}</h3> : null}
        {loading &&
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
      </div>
      {children}
    </div>
  )
}

export default Tile
