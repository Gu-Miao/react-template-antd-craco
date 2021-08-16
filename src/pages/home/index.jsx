import { Button } from 'antd'
import { Link } from 'react-router-dom'

import logo from '@assets/logo.svg'

import './style.less'

function Home() {
  return (
    <div id="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Edit <code>src/home.tsx</code> and save to reload.
        </p>
        <a
          className="home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">
          <Link to="/examples">View Examples</Link>
        </Button>
      </header>
    </div>
  )
}

export default Home
