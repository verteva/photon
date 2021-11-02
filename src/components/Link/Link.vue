<template>
  <a
    ref="elRef"
    v-bind="$attrs"
    :type="type"
    :class="classList"
    :style="styleList"
    :href="link"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />

    <slot name="default">
      {{ label }}
    </slot>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PButton',

  props: {
    label: {
      type: String as PropType<string>,
      default: '',
    },
    link: {
      type: String as PropType<string>,
      default: '#',
    },
    linkStyle: {
      type: String as PropType<string>,
      default: '',
    },
  },

  data(): any {
    return {
      baseClassList: [
        'ph-text-brand2',
        'ph-group',
        'ph-relative',
        'ph-transition',
        'focus:ph-outline-none',
        'focus:ph-underline',
        'focus:ph-text-brandh2',
        'hover:ph-text-brandh2',
      ],
    };
  },

  computed: {
    classList(): string[] {
      const a: string[] = [...this.baseClassList, ...this.linkStyles];
      return a;
    },
    linkStyles(): string[] {
      return [...this.plainLinkStyles];
    },
    plainLinkStyles(): string[] {
      return ['ph-p-0', 'ph-border-none'];
    },
    styleList(): string[] {
      return [];
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped></style>
