import { Button, Space } from 'antd'
import logo from './logo.svg'
import './index.scss'

function Home() {
  return (
    <div className="Home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" draggable="false" />
        <h1 className="title">Hello React!!</h1>
        <Space>
          <Button type="primary" size="large" href="/list">
            To list page
          </Button>
          <Button size="large" href="/counter">
            To counter page
          </Button>
        </Space>
      </header>
    </div>
  )
}

export default Home
