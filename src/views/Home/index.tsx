import { Button } from 'antd'
import logo from './logo.svg'
import './index.scss'

function Home() {
  return (
    <div className="Home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" draggable="false" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <Button type="primary" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Button>
      </header>
    </div>
  )
}

export default Home
