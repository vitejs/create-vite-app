// @ts-check
const preactRefresh = require('@prefresh/vite')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'preact',
  plugins: [preactRefresh()]
}

module.exports = config
