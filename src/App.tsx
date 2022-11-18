import { StrictMode, Suspense } from 'react'
import Nprogress from './components/Nprogress'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Suspense fallback={<Nprogress />}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </StrictMode>
  )
}

function Routes() {
  const element = useRoutes(routes)
  return element
}

export default App
