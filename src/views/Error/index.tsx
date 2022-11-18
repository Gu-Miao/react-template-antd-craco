import { ReactComponent as NotFound } from './not-found.svg'
import './index.scss'

function Error() {
  return (
    <div className="Error">
      <NotFound className="banner" />
      <h1 className="title">404 Not Found</h1>
      <p>The page you visit is not found, please go back home or try again</p>
    </div>
  )
}
export default Error
