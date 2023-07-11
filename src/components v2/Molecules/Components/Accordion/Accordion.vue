<template>
  <card
    class="ph-accordion-wrapper"
    no-padding
    :light="light"
    :border="border"
    :shadow="shadow"
    :class="{
      focussed,
    }"
  >
    <div
      :id="id"
      class="ph-accordion"
      data-testid="ph-accordion"
      :class="{ collapsed: !expandComplete }"
      :style="{ height }"
    >
      <accordion-header
        v-bind="{
          fullWidth,
          complete,
          disabled,
          expanded,
          openArrows,
          openCloseIcons,
          section,
          interactive: !stayOpen,
        }"
        @click="toggleOpen"
        @focus="focussed = true"
        @blur="focussed = false"
      >
        <slot name="heading" :expanded="expanded" />
      </accordion-header>
      <accordion-content
        :no-heading-rule="noHeadingRule"
        :no-horizontal-padding="noHorizontalPadding"
      >
        <slot name="default" />
      </accordion-content>
      <slot name="footer" />
    </div>
  </card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { AccordionElementHeights, AccordionData } from './types';
import Card, {
  props as CardProps,
} from '@/components v2/Atoms/Components/Card/Card.vue';
import AccordionHeader, {
  props as AccordionHeaderProps,
} from '@/components v2/Atoms/Components/AccordionHeader';
import AccordionContent, {
  props as AccordionContentProps,
} from '@/components v2/Atoms/Components/AccordionContent';

const { light, border, shadow } = CardProps;
const { fullWidth, complete, disabled, openArrows, openCloseIcons, section } =
  AccordionHeaderProps;
const { noHeadingRule, noHorizontalPadding } = AccordionContentProps;

export const props = {
  // Card Props
  border,
  shadow,
  light,
  // AccordionHeader props
  fullWidth,
  complete,
  disabled,
  openArrows,
  section,
  openCloseIcons,
  // AccordionContent props
  noHeadingRule,
  noHorizontalPadding,
  // Accordion Props
  open: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  stayOpen: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  singleFocus: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  focusShadow: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  value: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  identifier: {
    type: [String, Number],
    default: null,
  },
};

export default Vue.extend({
  name: 'P2Accordion',

  components: {
    Card,
    AccordionHeader,
    AccordionContent,
  },

  props,

  data(): AccordionData {
    return {
      height: 'auto',
      minHeight: null,
      maxHeight: null,
      expanded: Boolean(this.value || this.open || this.stayOpen),
      initialRender: false,
      focussed: false,
      expandComplete: Boolean(this.value || this.open || this.stayOpen),
      id: this.identifier || uuidv4(),
    };
  },

  watch: {
    value(val) {
      this.expanded = val;
    },
    open(val) {
      this.expanded = val;
    },
    expanded() {
      if (this.expanded) {
        // Allow for elements to be focussable again
        const { content } = this.getNode();
        content.style.display = 'initial';

        this.$nextTick(() => {
          this.switchState();
        });
      } else {
        this.expandComplete = false;
        this.switchState();
      }

      this.$emit('input', this.expanded);
    },
  },

  mounted(): void {
    const { accordion, totalHeight, headerHeight, content } = this.getNode();
    accordion.addEventListener('transitionend', this.onTransitionEnd);

    this.maxHeight = totalHeight;
    this.minHeight = headerHeight;

    if (this.expanded) {
      this.initialRender = false;
    } else {
      this.height = `${this.minHeight}px`;
      content.style.display = 'none';
    }
  },

  beforeDestroy() {
    const { accordion } = this.getNode();
    if (accordion) {
      accordion.removeEventListener('transitionend', this.onTransitionEnd);
    }
  },

  methods: {
    onTransitionEnd(e: TransitionEvent) {
      /*
        TransitionEvent fires for each property that
        is transitioning so check the event is fired
        on the height, so we can set to auto to allow
        for dynamic content adjustments.
      */
      if (e.propertyName === 'height') {
        const { accordion, content } = this.getNode();

        if (this.expanded) {
          accordion.style.height = 'auto';
          this.expandComplete = true;
        } else {
          // Elements in a hidden panel should not be focussale
          content.style.display = 'none';
        }

        if (this.initialRender) this.initialRender = false;
      }
    },
    toggleOpen(e: MouseEvent): void {
      e.preventDefault();
      if (!this.stayOpen) {
        /*
          If singleFocus is true, there should be multiple
          and only one is open at a time. Opening one will
          close the others. But this requires parent component
          to track which identifier is the open one.
        */
        if (this.singleFocus) {
          if (this.open) {
            this.$emit('toggle', null);
          } else {
            this.$emit('toggle', this.id);
          }
        } else {
          this.expanded = !this.expanded;
        }
      }
    },
    getHeight(): string {
      if (this.expanded) {
        return `${this.maxHeight}px`;
      }

      return `${this.minHeight}px`;
    },
    getNode(): AccordionElementHeights {
      const accordion = document.getElementById(this.id);
      const header = accordion && accordion.querySelector('.acc-header');
      const content = accordion && accordion.querySelector('.acc-content');

      const headerHeight =
        header && Math.round(header.getBoundingClientRect().height);
      const contentHeight =
        content && Math.round(content.getBoundingClientRect().height);
      const totalHeight =
        accordion && Math.round(accordion.getBoundingClientRect().height);

      return {
        accordion: accordion as HTMLElement,
        content: content as HTMLElement,
        headerHeight: headerHeight as number,
        contentHeight: contentHeight as number,
        totalHeight: totalHeight as number,
      };
    },
    switchState() {
      // Capture the height before close if its open
      const { accordion, totalHeight, contentHeight, headerHeight } =
        this.getNode();

      if (this.expanded && headerHeight) {
        this.maxHeight = contentHeight + headerHeight;
        accordion.style.height = `${this.maxHeight}px`;
      }

      if (!this.expanded) {
        this.maxHeight = totalHeight;
        accordion.style.height = `${this.maxHeight}px`;
        this.$nextTick(() => {
          const { headerHeight: updatedHeight } = this.getNode();
          accordion.style.height = `${updatedHeight}px`;
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-accordion-wrapper {
  transition: ease-out all 300ms;
  overflow: visible;
  &.disabled {
    opacity: 0.5;
  }
  &.focussed {
    box-shadow: var(--accordion-base-focused-shadow);
  }
}

.ph-accordion {
  transition: ease-out all 300ms;
  &.collapsed {
    overflow: hidden;
  }
}
</style>
