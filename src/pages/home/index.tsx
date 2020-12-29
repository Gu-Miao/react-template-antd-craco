import { Button } from 'antd'

import logo from '@assets/logo.svg'

import './style.scss'

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
        <Button type="primary">Antd Button</Button>
      </header>
    </div>
  )
}

export default Home
