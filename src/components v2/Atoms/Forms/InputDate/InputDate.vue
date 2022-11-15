<template>
  <div class="ph-input-date-wrapper">
    <p2-input-text
      type="text"
      name="day"
      placeholder="DD"
      centered
      :maxlength="2"
      :value="value.day"
      :disabled="disabled"
      @input="$emit('dateDay', $event)"
    />
    <div class="ph-date-slash">
      /
    </div>

    <p2-input-text
      type="text"
      name="month"
      placeholder="MM"
      centered
      :maxlength="2"
      :value="value.month"
      :disabled="disabled"
      @input="$emit('dateMonth', $event)"
    />

    <div class="ph-date-slash">
      /
    </div>

    <p2-input-text
      name="year"
      placeholder="YYYY"
      centered
      :maxlength="4"
      :value="value.year"
      :disabled="disabled"
      @input="$emit('dateYear', $event)"
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
});
</script>

<style lang="scss" scoped>
.ph-input-date-wrapper {
  display: flex;
  align-items: center;
  width: 320px;
}
.ph-date-slash {
  margin: var(--input-date-divider-margin);
  color: var(--input-date-divider-color);
}
</style>