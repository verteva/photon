<template>
  <nav class="ph-skip-link" aria-label="skip links navigation">
    <a
      id="ph-skip-link-navigation"
      class="ph-skip-link-anchor"
      :href="mainMenuId"
      aria-label="skip to navigation link"
    >
      Skip to navigation
    </a>
    <a
      id="ph-skip-link-content"
      class="ph-skip-link-anchor"
      :href="contentId"
      aria-label="skip to content link"
    >
      Skip to content
    </a>
  </nav>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  mainMenuId: {
    type: String as PropType<string>,
    default: '#mainmenu',
  },
  contentId: {
    type: String as PropType<string>,
    default: '#content',
  },
};

export default Vue.extend({
  name: 'P2SkipLink',
  props,
});
</script>
<style lang="scss" scoped>
@import '/src/assets/scss/main';

.ph-skip-link {
  z-index: 50;

  .ph-skip-link-anchor {
    position: absolute;
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
    outline: 0;
    pointer-events: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    opacity: 0;
    border-radius: var(--sd-input-default-border-radius);
    color: var(--sd-skiplink-default-text-color);
    background: var(--sd-skiplink-default-background-color);
    @include token-typography('sm', 'regular');

    &:focus {
      padding: var(--sd-button-sm-padding-top) var(--sd-button-sm-padding-right)
        var(--sd-button-sm-padding-bottom) var(--sd-button-sm-padding-left);
      margin: 8px;
      width: auto;
      height: auto;
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
