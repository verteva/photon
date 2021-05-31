/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.config.js" {
  const value: any;
  export default value;
}

declare module 'vue/types/vue' {
  interface Vue {}
}
