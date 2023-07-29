<template>
  <div class="ph-input-date-wrapper">
    <p2-input-text
      type="text"
      name="day"
      placeholder="DD"
      centered
      class="ph-input-date-field ph-input-date-field-day"
      :maxlength="2"
      :value="value.day"
      :disabled="disabled"
      is-number
      @input="$emit('dateDay', $event)"
      @keyup="onKeyup"
      @blur="$emit('dateDayBlur', $event)"
    />
    <p2-input-text
      type="text"
      name="month"
      placeholder="MM"
      centered
      class="ph-input-date-field ph-input-date-field-month"
      :maxlength="2"
      :value="value.month"
      :disabled="disabled"
      is-number
      @input="$emit('dateMonth', $event)"
      @keyup="onKeyup"
      @blur="$emit('dateMonthBlur', $event)"
    />
    <p2-input-text
      name="year"
      placeholder="YYYY"
      centered
      class="ph-input-date-field ph-input-date-field-year"
      :maxlength="4"
      :value="value.year"
      :disabled="disabled"
      is-number
      @input="$emit('dateYear', $event)"
      @keyup="onKeyup"
      @blur="$emit('dateYearBlur', $event)"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import P2InputText from '@/components v2/Atoms/Forms/InputText';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  value: {
    type: Object,
    default: () => ({}),
  },
  disabled,
};

export default Vue.extend({
  name: 'InputDate',

  components: {
    P2InputText,
  },

  props,

  methods: {
    onKeyup: function (e: InputEvent) {
      // If key entered is a number
      const isNumber = isFinite(event.key);
      if (isNumber) {
        // Check if total length in field equals maxlength
        if (e.target.value.length >= e.target.maxLength) {
          // If field has a next sibling (ie: it's not last field)
          if (e.target.parentElement.nextElementSibling) {
            // Give focus to the next sibling's input field and select all text
            let sibling = e.target.parentElement.nextElementSibling;
            if (sibling.children[0]) {
              sibling.children[0].focus();
              sibling.children[0].select();
            }
          }
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-input-date-wrapper {
  display: flex;
  align-items: center;
  --input-width: 56px;
  --input-slash-padding: 1.25em;

  .ph-input-text {
    position: relative;
    padding-right: var(--input-slash-padding);

    &:after {
      content: '/';
      font-size: 16px;
      color: var(--sd-theme-fg-default);
      position: absolute;
      right: 0px;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 12px;
      height: 1em;
      line-height: 1;
    }

    &:last-child {
      --input-slash-padding: 0px;
      &:after {
        content: none;
      }
    }
  }
}

.ph-input-date-field {
  width: calc(var(--input-width) + var(--input-slash-padding));

  &.ph-input-date-field-year {
    --input-width: 64px;
    //width: 64px;
  }
}
</style>
