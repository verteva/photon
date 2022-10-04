<template>
  <div class="figma-card" :class="[variant]">
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
  name: 'FigmaCard',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>
.figma-card {
  padding: 50px;
  background-color: red;
  max-width: 600px;
  &.default {
    padding-top: var(--components-card-default-verticalPadding);
    padding-bottom: var(--components-card-default-verticalPadding);
    padding-left: var(--components-card-default-horizontalPadding);
    padding-right: var(--components-card-default-horizontalPadding);
    border-radius: var(--components-card-default-borderRadius);
    border: 2px solid;
    border-color: var(--components-card-default-border);
    box-shadow: var(--components-card-default-boxShadow);
    background-color: var(--components-card-default-fill);
  }

  &.outline {
    padding-top: var(--components-card-default-verticalPadding);
    padding-bottom: var(--components-card-default-verticalPadding);
    padding-left: var(--components-card-default-horizontalPadding);
    padding-right: var(--components-card-default-horizontalPadding);
    border-radius: var(--components-card-default-borderRadius);
    border: 2px solid;
    border-color: var(--colors-theme-primary);
    box-shadow: var(--components-card-default-boxShadow);
    background-color: var(--components-card-default-fill);
  }

  .meta {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      background-color: var(--colors-theme-primary);
      border-radius: 100%;
    }

    p {
      font-size: var(--typography-meta-fontSize);
      font-weight: var(--typography-meta-fontWeight);
      line-height: var(--typography-meta-lineHeight);
      font-family: var(--typography-meta-fontFamily);
      color: var(--components-card-default-metaColor);
    }
  }

  .title {
    h3 {
      font-size: var(--typography-heading-fontSize);
      font-weight: var(--typography-heading-fontWeight);
      line-height: var(--typography-heading-lineHeight);
      font-family: var(--typography-heading-fontFamily);
      color: var(--colors-theme-primary);
      margin-bottom: 20px;
    }
  }

  .content {
    font-size: var(--typography-body-fontSize);
    font-weight: var(--typography-body-fontWeight);
    line-height: var(--typography-body-lineHeight);
    font-family: var(--typography-body-fontFamily);
  }

  .box-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  .button {
    padding: var(--spacing-xs) var(--spacing-sm);

    &.primary {
      background-color: var(--components-button-primary-bg-fill);
      border-radius: var(--components-button-primary-bg-borderRadius);
      color: var(--components-button-primary-fg-fill);

      &.outline {
        background-color: var(--components-button-primary-outline-bg-fill);
        border-radius: var(--components-button-primary-outline-bg-borderRadius);
        border: calc(
            var(--components-button-primary-outline-bg-borderWidth) * 1px
          )
          solid var(--components-button-primary-outline-bg-border);
        color: var(--components-button-primary-outline-fg-fill);
      }
    }
    &.secondary {
      background-color: var(--components-button-secondary-bg-fill);
      border-radius: var(--components-button-secondary-bg-borderRadius);
      color: var(--components-button-secondary-fg-fill);

      &.outline {
        background-color: var(--components-button-secondary-outline-bg-fill);
        border-radius: var(
          --components-button-secondary-outline-bg-borderRadius
        );
        border: calc(
            var(--components-button-secondary-outline-bg-borderWidth) * 1px
          )
          solid var(--components-button-secondary-outline-bg-border);
        color: var(--components-button-secondary-outline-fg-fill);
      }
    }
  }
}
</style>
