export const ThemeBar = {
  name: 'ThemeBar',
  props: {
    theme: {
      type: String,
      default: 'base',
    },
    color: {
      type: String,
      default: '#fff',
    },
    themeNames: {
      default: [],
    },
  },
  template: `
    <div class="wrapper">
      <div class="theme-bar">
          <div class="theme-bar-title">
            current theme:
          </div>
          <select :value="theme" @input="val => $emit('input', val)" :style="{ background: color }">
            <option
              v-for="themeName in themeNames"
              :key="themeName"
              :value="themeName"
            >
              {{ themeName }}
            </option>
          </select>
      </div>
      <div class="story-container"><slot /></div>
    </div>
  `,
};
