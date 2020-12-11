import React from 'react'
import { Button } from 'antd'
import Logo from '@components/Logo'
import pkg from '@@/package.json'
import './style.less'

const Home = () => {
  return (
    <div id="home">
      <Logo title="Welcome react template" />
      <div className="btn-wrapper">
        <Button type="primary" size="large" href={pkg.hompage} target="_blank">
          learn more
        </Button>
      </div>
    </div>
  )
}

export default Home
