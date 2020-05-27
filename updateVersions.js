const path = require('path')
const fs = require('fs-extra')
const got = require('got')

;(async () => {
  const templates = (await fs.readdir(__dirname)).filter((d) =>
    d.startsWith('template-')
  )
  for (const t of templates) {
    const pkgPath = path.join(__dirname, t, `package.json`)
    const pkg = require(pkgPath)
    const vite = await getVersion('vite')
    const vue = await getVersion('vue')
    pkg.devDependencies.vite = `^${vite.latest}`
    if (t === 'template-vue') {
      pkg.dependencies.vue = `^${vue.next}`
      pkg.devDependencies['@vue/compiler-sfc'] = pkg.dependencies.vue
    }
    await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2))
  }
})()

const getVersion = async (package) => {
  try {
    const { body = {} } = await got(
      `https://registry.npmjs.org/-/package/${package}/dist-tags`,
      {
        responseType: 'json'
      }
    )

    return body
  } catch (error) {
    console.log(error.response.body)
    process.exit(-1)
  }
}
