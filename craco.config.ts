import { join } from 'node:path'

const config = {
  webpack: {
    alias: {
      '@': join(__dirname, 'src')
    }
  }
}

export default config
