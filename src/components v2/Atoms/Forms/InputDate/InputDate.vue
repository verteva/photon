<template>
  <div class="ph-input-date-wrapper" :class="`date-format-${dateFormat}`">
    <div
      v-for="(field, i) in dateformatfields[dateFormat]"
      :key="i"
      class="ph-date-format-field"
      :class="`ph-date-format-field-${i}`"
    >
      <p2-input-text
        v-if="field == 'day'"
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
        v-if="field == 'month'"
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
        v-if="field == 'year'"
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
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import P2InputText from '@/components v2/Atoms/Forms/InputText';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';
import { DateFormats, DateFormat } from './types';

const { disabled } = formProps;

export const props = {
  value: {
    type: Object,
    default: () => ({}),
  },

  dateFormat: {
    type: String as PropType<DateFormat>,
    default: DateFormats.DDMMYYYY,
    validator(value: string): boolean {
      return Object.values(DateFormats).indexOf(value as DateFormat) !== -1;
    },
  },

  disabled,
};

export default Vue.extend({
  name: 'InputDate',

  components: {
    P2InputText,
  },

  props,

  data() {
    return {
      dateformatfields: {
        DDMMYYYY: {
          0: 'day',
          1: 'month',
          2: 'year',
        },
        YYYYMMDD: {
          0: 'year',
          1: 'month',
          2: 'day',
        },
        MMDDYYYY: {
          0: 'month',
          1: 'day',
          2: 'year',
        },
      },
    };
  },

  methods: {
    onKeyup: function (e: InputEvent) {
      // If key entered is a number
      const isNumber = isFinite(event.key);
      if (isNumber) {
        // Check if total length in field equals maxlength
        if (e.target.value.length >= e.target.maxLength) {
          // If field has a next sibling (ie: it's not last field)
          if (e.target.parentElement.parentElement.nextElementSibling) {
            // Give focus to the next sibling's input field and select all text
            let sibling =
              e.target.parentElement.parentElement.nextElementSibling;
            let nextfield =
              sibling.children[0] && sibling.children[0].children[0]
                ? sibling.children[0].children[0]
                : false;
            if (nextfield && nextfield.nodeName.toLowerCase() == 'input') {
              nextfield.focus();
              nextfield.select();
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
      width: var(--input-slash-padding);
      height: 1em;
      line-height: 1;
      display: block;
      text-align: center;
    }
  }

  .ph-date-format-field {
    &:last-child {
      --input-slash-padding: 0px;

      .ph-input-text:after {
        content: none;
      }
    }
  }

  .ph-input-date-field {
    width: calc(var(--input-width) + var(--input-slash-padding));

    &.ph-input-date-field-year {
      --input-width: 72px;
    }
  }
}
</style>
