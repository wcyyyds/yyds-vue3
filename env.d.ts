/// <reference types="vite/client" />


//解决: 找不到模块“../views/HomeView.vue”或其相应的类型声明
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
