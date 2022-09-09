<template>
  <label class="photon-label">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'P2Label',
};
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_themehelpers.scss';

@function getLabelProperty($property, $fallback: '') {
  @return getThemeProperty('label', $property, 'base', '', $fallback);
}

.photon-label {
  display: flex;
  align-items: baseline;

  font-family: getLabelProperty(
      'font-family',
      "Roboto, 'Helvetica Neue', Arial, sans-serif"
    ),
    serif;
  font-weight: getLabelProperty('font-weight', bold);
  font-size: getLabelProperty('font-size', 1rem);
  color: getLabelProperty('color', #000);
  line-height: getLabelProperty('line-height', 1.5);
  margin: getLabelProperty('margin', 0 0 0.5rem 0);
}
</style>
