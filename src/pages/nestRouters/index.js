import { Link } from 'react-router-dom'
import { Typography } from 'antd'

const { Text } = Typography

const NestRouters = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>NestRouters</h1>
      <p>
        If you are interested about how the routers rendered, see <Text code>src/router.js</Text>{' '}
        and <Text code>src/App.js</Text>.
      </p>
      <ul>
        <li>
          <Link to="/nest/a">to /nest/a</Link>
        </li>
        <li>
          <Link to="/nest/b">to /nest/b</Link>
        </li>
        <li>
          <Link to="/nest/c">to /nest/c</Link>
        </li>
      </ul>
    </div>
  )
}

export default NestRouters
