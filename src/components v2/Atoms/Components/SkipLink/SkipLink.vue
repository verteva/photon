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
.ph-skip-link {
  z-index: 50;

  .ph-skip-link-anchor {
    background: var(--skip-link-base-background);
    color: var(--skip-link-base-color);
    position: absolute;
    padding: 0;
    margin: 0;
    font-size: var(--skip-link-base-font-size);
    line-height: 1.5;
    width: 0;
    height: 0;
    border-radius: var(--skip-link-base-border-radius);
    outline: 0;
    pointer-events: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    opacity: 0;

    &:focus {
      padding: var(--skip-link-base-padding);
      margin: 8px;
      width: auto;
      height: auto;
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
