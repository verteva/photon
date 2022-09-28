<template>
  <div class="chameleon-card" :class="[variant]">
    <div class="header">
      <div class="meta">
        <div class="icon"></div>
        <p>Meta text</p>
      </div>
      <div class="title">
        <h3>Card Title</h3>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="box-container">
      <div class="button primary" :class="{ outline: variant === 'outline' }">
        Primary
      </div>
      <div class="button secondary" :class="{ outline: variant === 'outline' }">
        Secondary
      </div>
    </div>
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
  max-width: 600px;
  &.default {
    padding-top: var(--chameleon-components-card-default-verticalPadding);
    padding-bottom: var(--chameleon-components-card-default-verticalPadding);
    padding-left: var(--chameleon-components-card-default-horizontalPadding);
    padding-right: var(--chameleon-components-card-default-horizontalPadding);
    border-radius: var(--chameleon-components-card-default-borderRadius);
    border: 2px solid;
    border-color: var(--chameleon-components-card-default-border);
    box-shadow: var(--chameleon-components-card-default-boxShadow);
    background-color: var(--chameleon-components-card-default-fill);
  }

  &.outline {
    padding-top: var(--chameleon-components-card-default-verticalPadding);
    padding-bottom: var(--chameleon-components-card-default-verticalPadding);
    padding-left: var(--chameleon-components-card-default-horizontalPadding);
    padding-right: var(--chameleon-components-card-default-horizontalPadding);
    border-radius: var(--chameleon-components-card-default-borderRadius);
    border: 2px solid;
    border-color: var(--chameleon-colors-theme-primary);
    box-shadow: var(--chameleon-components-card-default-boxShadow);
    background-color: var(--chameleon-components-card-default-fill);
  }

  .meta {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      background-color: var(--chameleon-colors-theme-primary);
      border-radius: 100%;
    }

    p {
      font-size: var(--chameleon-typography-meta-fontSize);
      font-weight: var(--chameleon-typography-meta-fontWeight);
      line-height: var(--chameleon-typography-meta-lineHeight);
      font-family: var(--chameleon-typography-meta-fontFamily);
      color: var(--chameleon-components-card-default-metaColor);
    }
  }

  .title {
    h3 {
      font-size: var(--chameleon-typography-heading-fontSize);
      font-weight: var(--chameleon-typography-heading-fontWeight);
      line-height: var(--chameleon-typography-heading-lineHeight);
      font-family: var(--chameleon-typography-heading-fontFamily);
      color: var(--chameleon-colors-theme-primary);
      margin-bottom: 20px;
    }
  }

  .content {
    font-size: var(--chameleon-typography-body-fontSize);
    font-weight: var(--chameleon-typography-body-fontWeight);
    line-height: var(--chameleon-typography-body-lineHeight);
    font-family: var(--chameleon-typography-body-fontFamily);
  }

  .box-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  .button {
    padding: var(--chameleon-spacing-xs) var(--chameleon-spacing-sm);

    &.primary {
      background-color: var(--chameleon-components-button-primary-bg-fill);
      border-radius: var(--chameleon-components-button-primary-bg-borderRadius);
      color: var(--chameleon-components-button-primary-fg-fill);

      &.outline {
        background-color: var(
          --chameleon-components-button-primary-outline-bg-fill
        );
        border-radius: var(
          --chameleon-components-button-primary-outline-bg-borderRadius
        );
        border: calc(
            var(--chameleon-components-button-primary-outline-bg-borderWidth) *
              1px
          )
          solid var(--chameleon-components-button-primary-outline-bg-border);
        color: var(--chameleon-components-button-primary-outline-fg-fill);
      }
    }
    &.secondary {
      background-color: var(--chameleon-components-button-secondary-bg-fill);
      border-radius: var(
        --chameleon-components-button-secondary-bg-borderRadius
      );
      color: var(--chameleon-components-button-secondary-fg-fill);

      &.outline {
        background-color: var(
          --chameleon-components-button-secondary-outline-bg-fill
        );
        border-radius: var(
          --chameleon-components-button-secondary-outline-bg-borderRadius
        );
        border: calc(
            var(--chameleon-components-button-secondary-outline-bg-borderWidth) *
              1px
          )
          solid var(--chameleon-components-button-secondary-outline-bg-border);
        color: var(--chameleon-components-button-secondary-outline-fg-fill);
      }
    }
  }
}
</style>
