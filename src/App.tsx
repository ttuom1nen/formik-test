import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import Main from './views/Main'
import Swapi from './views/Swapi'
import FeatureToggles from './views/FeatureToggles'
import Sidepanel from './components/Sidepanel'
import styles from './app.module.scss'
import Migrations from './views/Migrations'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />}></Route>
        <Route path="/toggles" element={<FeatureToggles />}></Route>
        <Route path="/swapi" element={<Swapi />}></Route>
        <Route path="/migrations" element={<Migrations />}></Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <div className={styles.siteFrame}>
      <div className={styles.sidePanelContainer}>
        <Sidepanel />
      </div>
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
