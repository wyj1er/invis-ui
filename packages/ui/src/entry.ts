// import type { App } from 'vue'
import { version } from '../../package.json'
import SButton from './button/Button'
import plugins from './plugins'
// import SFCButton from './SFCButton.vue'
// import TSXButton from './TSXButton'
import 'virtual:uno.css'

export * from './button'
export * from './link'

export default {
  install(app) {
    app.component(SButton.name, SButton)
    plugins.forEach(c => app.use(c))
  },
  version,

}
