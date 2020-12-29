const path = require('path')

const resloveSrc = _path => path.join(__dirname, 'src', _path)

module.exports = {
  babel: {},
  webpack: {
    alias: {
      '@components': resloveSrc('components')
    }
  }
}
