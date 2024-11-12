// import type { App } from 'vue'
import { version } from '../package.json'
import SButton from './button/Button'
import plugins from './plugins'
// import SFCButton from './SFCButton.vue'
// import TSXButton from './TSXButton'
import 'virtual:uno.css'
// 导出单独组件
// export { SButton, SFCButton, TSXButton }
// 导出组件
export * from './button'
export * from './link'
// 编写一个插件，实现一个 install 方法
// export default {
//   install(app: App): void {
//     app.component(SButton.name, SButton)
//     // app.component(SFCButton.name, SFCButton)
//     // app.component(TSXButton.name, TSXButton)
//     plugins.forEach(c => app.use(c))
//   },
//   version,
// }
export default {
  install(app) {
    app.component(SButton.name, SButton)
    // eslint-disable-next-line style/max-statements-per-line
    plugins.forEach((c) => { return app.use(c) })
  },
  version,
}
