<template>
  <div class="photon-input">
    <slot />
    <div
      class="photon-input-error"
      :class="{
        hidden: !(errors.length && !hideErrors),
      }"
    >
      <p-icon
        class="icon"
        :class="{
          hidden: !(errors.length && !hideErrors),
        }"
        name="Error"
        type="sm"
      />
      <p-text sm class="photon-input-error-text">
        {{ errorsMessages }}
      </p-text>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../../components/Icon';
import { PText } from '../../components/Typography';

export default Vue.extend({
  name: 'P2Input',
  components: {
    PIcon,
    PText,
  },
  props: {
    hideErrors: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
  },
  computed: {
    errorsMessages(): string {
      return this.errors.join(', ');
    },
  },
});
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_themehelpers.scss';

@function getInputErrorProperty($property, $fallback: '') {
  @return getThemeProperty('input-error', $property, 'base', '', $fallback);
}

.photon-input {
  .photon-input-error {
    display: flex;
    align-items: center;
    opacity: 1;
    font-size: getInputErrorProperty('font-size', 0.75rem);
    line-height: getInputErrorProperty('line-height', 1.5rem);
    min-height: getInputErrorProperty('min-height', 1.5rem);
    padding: getInputErrorProperty('padding', 0.25rem);
    color: getInputErrorProperty('color', red);

    &.hidden {
      opacity: 0;
    }

    .icon {
      margin-right: 4px;
      opacity: 1;
      &.hidden {
        opacity: 0;
      }
    }

    .photon-input-error-text {
      min-height: getInputErrorProperty('min-height', 1.5rem);
    }
  }
}
</style>
