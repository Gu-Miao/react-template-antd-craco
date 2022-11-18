import { useEffect } from 'react'
import nprogress from 'accessible-nprogress'
import 'accessible-nprogress/dist/accessible-nprogress.css'

nprogress.configure({
  showSpinner: false
})

function Nprogress() {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  })
  return null
}

export default Nprogress
