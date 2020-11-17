import React from 'react'
import PropTypes from 'prop-types'
import react from '@assets/react.svg'
import '@components/Logo/logo.less'

const Logo = ({ title = '' }) => {
  return (
    <div className="c-logo">
      <img src={react} alt="logo" draggable="false" />
      <span className="title">{title}</span>
    </div>
  )
}

Logo.propTypes = {
  title: PropTypes.string
}

export default Logo
