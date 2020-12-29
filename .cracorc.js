const path = require('path')

const resloveSrc = (...paths) => path.join(__dirname, 'src', ...paths)

module.exports = {
  babel: {},
  webpack: {
    alias: {
      '@': resloveSrc(),
      '@assets': resloveSrc('assets'),
      '@components': resloveSrc('components'),
      '@pages': resloveSrc('pages'),
      '@utils': resloveSrc('utils')
    }
  }
}
