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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />}></Route>
        <Route path="/toggles" element={<FeatureToggles />}></Route>
        <Route path="/swapi" element={<Swapi />}></Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
    >
      <div style={{ padding: '2rem' }}>
        <ul>
          <li>
            <Link to="/">Basic information</Link>
          </li>
          <li>
            <Link to="/toggles">Feature Toggles</Link>
          </li>
          <li>
            <Link to="/swapi">Swapi</Link>
          </li>
        </ul>
      </div>

      <div style={{ padding: '2rem', width: '100%' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
