import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'
import * as path from 'path'

module.exports = {
  jsx: 'react',
  plugins: [
    vpr,
    mdx(),
    pages(path.join(__dirname, 'pages'), async (helpers) => {
      const demos = path.join(__dirname, 'src')
      const title: { [publicPath: string]: string } = {}

      let pages = await helpers.findPagesFromGlob(
        demos,
        '*/demos/**/*.{[tj]sx,md?(x)}',
        // for each matched file, we generate page data with it
        async (filePath) => {
          const relative = path.relative(demos, filePath)
          const match = relative.match(/(.*)\/demos\/(.*)\.([tj]sx|mdx?)$/)
          if (!match) throw new Error('unexpected file: ' + filePath)
          const [_, componentName, demoPath] = match
          const publicPath = `/${componentName}`
          // Record title for every page
          title[publicPath] = componentName + ' Title'
          return {
            // Pages with same publicPath will be composed together.
            // So that multiple demos of the same component will be displayed together.
            publicPath,
            staticData: {
              ...(await helpers.extractStaticData(filePath)),
              demoPath
            }
          }
        }
      )
      // augment the staticData of composed pages
      pages = pages.map((pageData) => {
        if (!pageData.staticData.isComposedPage) return pageData
        return {
          ...pageData,
          staticData: {
            ...pageData.staticData,
            // add title for composed pages
            title: title[pageData.publicPath]
          }
        }
      })
      // we also want to collect pages from `/pages` with basic filesystem routing convention
      const defaultPages = await helpers.defaultFindPages(
        path.join(__dirname, 'pages')
      )
      return [...defaultPages, ...pages]
    })
  ],
  alias: {
    'my-lib': '/src'
  },
  minify: false,
  outDir: 'docs-dist'
} as UserConfig
