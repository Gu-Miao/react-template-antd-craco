import { Link } from 'react-router-dom'

const A = () => {
  return (
    <div>
      <h1>A</h1>
      <ul>
        <li>
          <Link to="/nest/a/aa">to /nest/a/aa</Link>
        </li>
        <li>
          <Link to="/nest/a/ab">to /nest/a/ab</Link>
        </li>
      </ul>
    </div>
  )
}

export default A
