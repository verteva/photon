<template>
  <div
    ref="progressBar"
    class="ph-autocomplete-progress"
    :class="{ 'ph-progress-loading': loading }"
  >
    <div class="ph-progress-bar-short-ltr"></div>
    <div class="ph-progress-bar-long-ltr"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBar',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.ph-autocomplete-progress {
  width: 100%;

  overflow: hidden;
  position: relative;
}

.ph-progress-loading {
  height: 1px;
}

.ph-progress-bar-long-ltr {
  background-color: var(--autocomplete-loading-bar-color);
  bottom: 0;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: auto;
  will-change: left, right;
  height: 0.125rem;
  background: var(--autocomplete-loading-bar-color);
  animation-name: progressLinearLongLtr;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
}

.ph-progress-bar-short-ltr {
  background-color: var(--autocomplete-loading-bar-color);
  bottom: 0;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: 50%;
  will-change: left, right;
  background: var(--autocomplete-loading-bar-color);
  animation-name: progressLinearShortLtr;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
}

@keyframes progressLinearShortLtr {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

@keyframes progressLinearLongLtr {
  0% {
    left: -90%;
    right: 100%;
  }

  60% {
    left: -90%;
    right: 100%;
  }

  100% {
    left: 100%;
    right: -35%;
  }
}
</style>
