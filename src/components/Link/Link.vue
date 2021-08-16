<template>
  <nav
    ref="elRef"
    v-bind="$attrs"
    :type="type"
    :class="classList"
    :style="styleList"
    v-on="$listeners"
  >
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name"
    />
    <div class="">
      <a
        :href="link"
        class=""
        :class="[
          'ph-transition',
        ]"
      >
        <slot name="default">
          {{ label }}
        </slot>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PButton',

  props: {
    label: {
      type: String as PropType<string>,
      default: 'This is a link',
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
        'ph-items-center',
        'ph-justify-center',
        'ph-transition',
        'ph-shadow-none',
        'focus:ph-outline-none',
        'focus:ph-shadow-brand',
        'hover:ph-text-hover-brand2'
      ],
    }
  },

  computed: {
    classList(): string[] {
      const a: string[] = [
        ...this.baseClassList,
        ...this.linkStyles,
      ];
      return a;
    },
    linkStyles(): string[] {
      return [
        ...this.plainLinkStyles,
      ];
    },
    plainLinkStyles (): string[] {
      return [
        'ph-p-0',
        'ph-border-none',
      ]
    },
    styleList(): string[] {
      return [];
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
  
</style>
