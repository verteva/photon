<template>
  <div class="photon-label">
    <span class="label">{{ label }}</span>
    <span v-if="isRequired" class="required-asterisks">*</span>
    <span class="inline-text">{{ inlineText }}</span>
  </div>
</template>

<script>
export default {
  name: 'P2Label',
  props: {
    label: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    inlineText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.photon-label {
  display: flex;
  align-items: baseline;
  margin: var(--label-base-margin, 0 0 10px 0);

  .label {
    font-family: var(--label-base-font-family, "'roboto' arial sans-serif");
    font-weight: var(--label-base-font-weight, bold);
    font-size: var(--label-base-font-size, 1rem);
    line-height: var(--label-base-line-height, 1.5);
    color: var(--label-base-color, #000);
  }

  .required-asterisks {
    margin-left: 2px;
    font-family: var(--label-base-font-family, "'roboto' arial sans-serif");
    font-weight: var(--label-asterisks-font-weight, bold);
    font-size: var(--label-base-font-size, 1rem);
    line-height: var(--label-base-line-height, 1.5);
    color: var(--label-asterisks-color, #f00);
  }

  .inline-text {
    margin-left: 8px;
    font-family: var(--label-base-font-family, "'roboto' arial sans-serif");
    font-weight: var(--label-base-inline-text-font-weight, 400);
    font-size: var(--label-base-font-size, 1rem);
    line-height: var(--label-base-line-height, 1.5);
    color: var(--label-base-color, #000);
  }
}
</style>
