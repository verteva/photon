<template>
  <div class="ph-autocomplete-search">
    <span v-if="prefixIcon" class="ph-icon-wrapper ph-autocomplete-prefix-icon">
      <p-icon ref="prefixIcon" :name="prefixIcon" type="med"></p-icon>
    </span>
    <input
      v-show="hideInputOnSelected"
      ref="input"
      class="vs__search"
      :class="prefixIcon && 'ph-autocomplete-search-indent'"
      v-bind="attributes"
      v-on="events"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
export default Vue.extend({
  name: 'InputSearch',
  components: {
    PIcon,
  },
  props: {
    prefixIcon: {
      type: String as PropType<string>,
      default: '',
    },

    hideInputOnSelected: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    selected: {
      type: [Number, String, Object] as PropType<any>,
      default: null,
    },

    attributes: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },

    events: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
  },

  methods: {
    onFocus() {
      this.$emit('focus');
    },

    onBlur() {
      this.$emit('blur');
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-autocomplete-search {
  display: flex;
  flex: 1 1 0%;

  .ph-icon-wrapper {
    color: var(--autocomplete-icon-color);
  }
  .ph-autocomplete-prefix-icon {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  .vs__search {
    height: 40px;
    flex: 1 1 0%;
    opacity: 1 !important;
    line-height: 40px;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    margin: 0;
    border-width: 0px;
    text-indent: 12px;
    height: 30px;
    margin-top: 6px;
    &:focus {
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
      border-width: 0px;
      padding-left: 1.25rem;
    }
  }
  .ph-autocomplete-search-indent {
    text-indent: 8px;
  }
}
</style>
