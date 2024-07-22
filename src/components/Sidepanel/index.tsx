import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const navigation = [
    { id: "users", title: "Users", to: "/users" },
    { id: "toggles", title: "Feature Toggles", to: "/toggles" },
    { id: "migrations", title: "DB Migrations", to: "/migrations" }
]

const Sidepanel = () => {
    return (<nav className={styles.sidepanel}>
        <ul>
            {
                navigation.map(navItem => {
                    return (<li key={navItem.id}>
                        <NavLink to={navItem.to} className={({ isActive, isPending }) =>
                            isPending ? styles.isPending : isActive ? styles.active : ""
                        }>{navItem.title}</NavLink>
                    </li>)
                })
            }
        </ul>
    </nav>)
}

export default Sidepanel
