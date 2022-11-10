/* eslint-disable */

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
  export const props
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  export const props: { [key: string]: any }
}

declare module 'vue-select';

declare module 'uuid';

declare module "*.svg" {
  const content: any;
  export default content;
}
