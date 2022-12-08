<template>
  <nav class="ph-skip-link" aria-label="skip links navigation">
    <a
      class="ph-skip-link-anchor"
      :href="mainMenuId"
      aria-label="skip to navigation link"
    >
      Skip to navigation
    </a>
    <a
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
    background: var(--theme-primary-default);
    color: white;
    position: absolute;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 0;
    height: 0;
    border-radius: 0.375rem;
    outline: 0;
    pointer-events: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    opacity: 0;

    &:focus {
      padding: 1rem;
      margin: 0.5rem;
      width: auto;
      height: auto;
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
