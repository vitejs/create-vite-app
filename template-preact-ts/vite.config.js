// @ts-check
import preactRefresh from '@prefresh/vite'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment'
  },
  plugins: [preactRefresh()]
}

export default config
