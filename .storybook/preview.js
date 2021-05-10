
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
}

// import { app } from '@storybook/vue3';
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';

// app.component('v-select', vSelect)
// app.mount('#app');