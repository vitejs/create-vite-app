// @ts-check
import preactRefresh from '@prefresh/vite'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'preact',
  plugins: [preactRefresh()]
}

export default config
