<template>
  <nav 
    class="skip-link"
    aria-label="skip links navigation"
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
import Vue from 'vue';

export default Vue.extend({
  name: 'PSkipLink',

  props: {
    mainMenuId: {
      type: String,
      default: '#mainmenu'
    },
    contentId: {
      type: String,
      default: '#content'
    },
    linkClassArr: {
      type: Array,
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
        'ph-bg-brandPrimary',
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
      ],
    };
  },

  computed: {
    allClasses() {
      return [...this.linkClasses, ...this.linkClassArr]
    }
  },

  methods: {
  },
});
</script>