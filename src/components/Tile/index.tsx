import React, { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  title?: string
  children?: ReactNode
}

const Tile = ({ title, children }: Props) => {
  return (
    <div className={styles.tile}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  )
}

export default Tile
