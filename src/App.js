import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import { LoadingOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
import zh_ch from 'antd/es/locale/zh_CN'
import router from '@/router'
import './style.less'

const App = () => {
  return (
    <ConfigProvider locale={zh_ch}>
      <Suspense
        fallback={<LoadingOutlined style={{ fontSize: 20, margin: 10, color: '#32abf1' }} />}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <CacheSwitch>
            {router.map(({ component, title, ...restProps }, index) => {
              const RouteComponent = restProps.when ? CacheRoute : Route
              return (
                <RouteComponent
                  key={index}
                  {...restProps}
                  render={props => {
                    if (title) document.title = title
                    const Component = lazy(() => import(`@pages/${component}`))
                    return <Component {...props} />
                  }}
                />
              )
            })}
          </CacheSwitch>
        </Router>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
