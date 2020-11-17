const styleMap = {
  default: {
    color: '#000'
  },
  info: {
    background: '#32abf1',
    color: '#fff'
  },
  success: {
    background: '#4cd137',
    color: '#fff'
  },
  danger: {
    background: '#e84118',
    color: '#fff'
  }
}

/**
 * Get log style
 * @param {string} type log type
 * @returns {string} style string
 */
const getLogStyle = type => {
  const option = styleMap[type] || styleMap.default
  let styleStr = ''
  Object.keys(option).forEach(key => {
    styleStr += `${key}:${option[key]};`
  })
  return styleStr
}

/**
 * Colorful log
 * @param {string} title title
 * @param {*} content content
 * @param {string} type log type that must in styleMap's key
 */
const log = (title = '', content = '', type = 'default') => {
  const styleStr = getLogStyle(type)
  console.log(`%c${title}`, styleStr)
  console.log(content)
}

export { log }
