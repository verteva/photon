<template>
  <p-input :errors="errors">
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>
    <div class="photon-input-number">
      <div
        ref="decrease"
        class="photon-input-number-button minus"
        :class="{
          disabled: innerValue === minVal,
        }"
        @click="changeNumber('minus')"
      >
        -
      </div>
      <input
        v-model="innerValue"
        type="number"
        class="photon-input-number-input-field"
        @wheel="$event.preventDefault()"
      />
      <div
        ref="increase"
        class="photon-input-number-button plus"
        :class="{
          disabled: innerValue === maxVal,
        }"
        @click="changeNumber('add')"
      >
        +
      </div>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PInput from '../../components/Input';
import PLabel from '../../components/Label';

export default Vue.extend({
  name: 'P2InputNumber',
  components: { PInput, PLabel },
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    minVal: {
      type: Number as PropType<number>,
      default: 0,
    },
    maxVal: {
      type: Number as PropType<number>,
      default: 999999999,
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
  },
  data() {
    return {
      numberVal: (this as any).value,
    };
  },
  computed: {
    innerValue: {
      get() {
        return (this as any).value;
      },
      set(val) {
        (this as any).$emit('input', Number(val));
      },
    },
  },

  methods: {
    changeNumber(change) {
      if (change === 'add') {
        (this as any).innerValue < (this as any).maxVal &&
          (this as any).innerValue++;
      } else {
        (this as any).innerValue > (this as any).minVal &&
          (this as any).innerValue--;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_themehelpers.scss';

@function getInputNumberThemeProperty($property, $state, $fallback: '') {
  @return getThemeProperty(
    'input-number',
    $property,
    'base',
    $state,
    $fallback
  );
}

@function getInputNumberButtonThemeProperty($property, $state, $fallback: '') {
  @return getThemeProperty(
    'input-number-buttons',
    $property,
    'base',
    $state,
    $fallback
  );
}

.photon-input-number {
  display: flex;
  .photon-input-number-input-field {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: $all-transitions;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    width: getInputNumberThemeProperty('width', '', 100%);
    padding: getInputNumberThemeProperty('padding', '', 0);
    color: getInputNumberThemeProperty('color', '', grey);
    background: getInputNumberThemeProperty('background', '', white);
    border: getInputNumberThemeProperty('border', '', 1px solid grey);
    border-color: getInputNumberThemeProperty('border-color', '', grey);
    border-radius: getInputNumberThemeProperty('border-radius', '', 0);
    font-weight: getInputNumberThemeProperty('font-weight', '', 400);

    &:focus {
      outline: getInputNumberThemeProperty('outline', 'focus', none);
      border: getInputNumberThemeProperty(
        'border',
        'focus',
        1px solid transparent
      );
      border-color: getInputNumberThemeProperty('border-color', 'focus', grey);
    }

    &.disabled {
      outline: getInputNumberThemeProperty('outline', 'disabled', none);
      border: getInputNumberThemeProperty(
        'border',
        'disabled',
        1px solid transparent
      );
      border-color: getInputNumberThemeProperty(
        'border-color',
        'disabled',
        grey
      );
      background: getInputNumberThemeProperty('background', 'disabled', grey);
    }
  }

  .photon-input-number-button {
    font-size: getInputNumberButtonThemeProperty('font-size', '', 2.25rem);
    line-height: getInputNumberThemeProperty('line-height', '', 2.5rem);
    color: getInputNumberButtonThemeProperty('color', '', grey);
    cursor: pointer;

    &.plus {
      margin-left: getInputNumberButtonThemeProperty('margin', '', 0);
    }

    &.minus {
      margin-right: getInputNumberButtonThemeProperty('margin', '', 0);
    }

    &.disabled {
      cursor: not-allowed;
      color: getInputNumberButtonThemeProperty('color', 'disabled', grey);
    }
  }
}
</style>
