import { BrowserRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import AsyncComponent from '@components/AsyncComponent'

import routers from '@/router'

const App = () => {
  return (
    <Router>
      <CacheSwitch>
        {routers.map(({ component, when, ...restProps }, key) => {
          const Comp = when ? CacheRoute : Route
          return <Comp key={key} {...restProps} component={AsyncComponent(component)} />
        })}
      </CacheSwitch>
    </Router>
  )
}

export default App
