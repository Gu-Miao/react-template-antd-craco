import { lazy, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import Home from './views/Home'

function getLazyComponent(path: string): ReactNode {
  const Component = lazy(() => import(`./views/${path}`))

  return <Component />
}

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '*', element: getLazyComponent('Error') }
]

export default routes
