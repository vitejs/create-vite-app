const fs = require('fs-extra')
const path = require('path')

;(async () => {
  const templates = (await fs.readdir(__dirname)).filter((d) =>
    d.startsWith('template-')
  )
  for (const t of templates) {
    const pkgPath = path.join(__dirname, t, `package.json`)
    const pkg = require(pkgPath)
    pkg.devDependencies.vite = `^` + require('../vite/package.json').version
    if (t === 'template-vue') {
      pkg.dependencies.vue = `^` + require('../vue-next/package.json').version
      pkg.devDependencies['@vue/compiler-sfc'] = pkg.dependencies.vue
    }
    await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2))
  }
})()
