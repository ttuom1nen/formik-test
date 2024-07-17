import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Sidepanel = () => {
    return (<div className={styles.sidepanel}>
        <ul>
            <li>
                <Link to="/">Users</Link>
            </li>
            <li>
                <Link to="/toggles">Feature Toggles</Link>
            </li>
            <li>
                <Link to="/migrations">DB Migrations</Link>
            </li>
        </ul>
    </div>)
}

export default Sidepanel
