<template>
  <div class="chameleon-card default">
    <div class="header">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="subtitle">
        <slot name="subtitle" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ChameleonCard',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>
.chameleon-card {
  padding: 50px;
  background-color: red;
  &.default {
    padding-top: var(--chameleon-components-card-default-verticalPadding);
    padding-bottom: var(--chameleon-components-card-default-verticalPadding);
    padding-left: var(--chameleon-components-card-default-horizontalPadding);
    padding-right: var(--chameleon-components-card-default-horizontalPadding);
    border-radius: var(--chameleon-components-card-default-borderRadius);
    border: 1px solid;
    border-color: var(--chameleon-components-card-default-border);
    box-shadow: var(--chameleon-components-card-default-boxShadow);
    background-color: var(--chameleon-components-card-default-fill);
  }
}
</style>
