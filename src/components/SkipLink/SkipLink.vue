<template>
  <nav 
    class="skip-link ph-z-50"
    v-bind="$attrs"
    aria-label="skip links navigation"
    v-on="$listeners"
  >
    <a 
      :class="linkClasses"
      :href="mainMenuId"
      aria-label="skip to navigation link"
    >
      Skip to navigation
    </a>
    <a 
      :class="linkClasses"
      :href="contentId"
      aria-label="skip to content link"
    >
      Skip to content
    </a>
  </nav>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PSkipLink',

  props: {
    mainMenuId: {
      type: String as PropType<string>,
      default: '#mainmenu'
    },
    contentId: {
      type: String as PropType<string>,
      default: '#content'
    },
    linkClassArr: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  data(): {
    linkClasses: string[];
  } {
    return {
      linkClasses: [
        'skip-link__link',
        'ph-absolute',
        'ph-bg-brand1',
        'ph-text-white',
        'ph-p-0',
        'focus:ph-p-4',
        'ph-m-0',
        'focus:ph-m-2',
        'ph-h-0',
        'ph-w-0',
        'focus:ph-w-auto',
        'focus:ph-h-auto',
        'ph-pointer-events-none',
        'focus:ph-pointer-events-auto',
        'ph-opacity-0',
        'focus:ph-opacity-100',
        'ph-outline-none',
        'ph-shadow-lg',
        'ph-rounded-md',
        'ph-text-base',
      ],
    };
  },

  computed: {
    allClasses(): string[] {
      return [...this.linkClasses, ...this.linkClassArr]
    }
  },

  methods: {
  },
});
</script>
