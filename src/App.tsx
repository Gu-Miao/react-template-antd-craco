import { StrictMode, Suspense } from 'react'
import Nprogress from './components/Nprogress'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Suspense fallback={<Nprogress />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </StrictMode>
  )
}

export default App
