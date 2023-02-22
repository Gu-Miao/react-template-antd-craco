import { lazy, ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'

function getLazyComponent(path: string): ReactNode {
  const Component = lazy(() => import(`./views/${path}`))

  return <Component />
}

export default createBrowserRouter(
  [
    { index: true, element: <Home /> },
    { path: 'list', element: getLazyComponent('List') },
    { path: 'counter', element: getLazyComponent('Counter') },
    { path: '*', element: getLazyComponent('Error') }
  ],
  { basename: process.env.PUBLIC_URL }
)
