import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const navigation = [
    { id: "users", title: "Users", to: "/" },
    { id: "toggles", title: "Feature Toggles", to: "/toggles" },
    { id: "migrations", title: "DB Migrations", to: "/migrations" }
]

const Sidepanel = () => {
    return (<div className={styles.sidepanel}>
        <ul>
            {
                navigation.map(navItem => {
                    return (<li key={navItem.id}>
                        <Link to={navItem.to}>{navItem.title}</Link>
                    </li>)
                })
            }
        </ul>
    </div>)
}

export default Sidepanel
