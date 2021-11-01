<template>
  <div :id="id" :class="classList" :style="{ height }">
    <component
      :is="headerComponent"
      :disabled="disabled"
      :class="headerClassList"
      @click="toggleOpen"
      @focus="focussed = true"
      @blur="focussed = false"
    >
      {{ section }}
      <slot name="heading" :expanded="expanded" />
      <p-icon
        v-if="complete"
        name="Checkmark"
        type="xs"
        class="ph-ml-4 ph-text-alert3"
      />
      <div v-if="openArrows" class="ph-ml-auto">
        <p-icon
          name="ChevronDown"
          type="xs"
          class="ph-transition-all"
          :class="
            (innerValue && 'ph-transform ph-rotate-0') ||
              'ph-transform ph--rotate-90'
          "
        />
      </div>
      <div v-if="!openArrows && openCloseIcons.length === 2" class="ph-ml-auto">
        <p-icon
          :name="!innerValue ? openCloseIcons[0] : openCloseIcons[1]"
          type="sm"
        />
      </div>
    </component>
    <div class="ph-flex ph-relative">
      <hr
        v-if="!unstyled && !noHeadingRule"
        class="ph-absolute ph-top-0 ph-left-0 ph-right-0 ph-mx-8"
      />
      <div
        class="acc-content ph-w-full"
        :class="[
          unstyled ? '' : `ph-pb-6 ${componentPadding}`,
          noHeadingRule ? 'ph-pt-2' : 'ph-pt-6',
        ]"
      >
        <slot name="default" />
      </div>
    </div>
    <div class="ph-rounded-b-xl">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import { v4 as uuidv4 } from 'uuid';
import { AccordionElementHeights, AccordionData } from './types';

export default Vue.extend({
  name: 'PAccordion',

  components: {
    PIcon,
  },

  props: {
    singleFocus: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    openArrows: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    openCloseIcons: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    unstyled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    fullWidth: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    complete: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    stayOpen: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    shadow: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    noHeadingRule: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    /*
      Determines if an accordion instance loses its
      horizontal padding in smaller screen dimensions
    */
    mobileNoPadding: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    section: {
      type: String as PropType<string>,
      default: '',
    },
    backgroundColor: {
      type: String as PropType<string>,
      default: 'ph-bg-grey6',
    },
    identifier: {
      type: [String, Number],
      default: null,
    },
  },

  data(): AccordionData {
    return {
      baseClassList: ['ph-ease-out', 'ph-transition-all'],
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

  computed: {
    innerValue: {
      get(): boolean {
        return this.expanded;
      },
    },

    headerComponent(): string {
      return this.stayOpen ? 'div' : 'button';
    },

    headerClassList(): string[] {
      const classes = [
        'acc-header',
        'ph-flex',
        'ph-items-center',
        'ph-uppercase',
        'ph-text-grey3',
        'ph-font-normal',
        'focus:ph-outline-none',
        this.unstyled ? '' : 'ph-py-6 ph-px-4 sm:ph-px-8',
        (this.fullWidth && 'ph-w-full') || '',
      ];

      return classes;
    },

    classList(): string[] {
      let shadow = this.shadow ? 'ph-shadow' : '';
      if (this.focussed) {
        shadow = 'ph-shadow-brand';
      }

      const a: string[] = [
        ...this.baseClassList,
        this.unstyled
          ? ''
          : `ph-border-0 ph-border-grey5 ${this.componentRadius}`,
        !this.border || this.unstyled ? 'ph-border-0' : 'ph-border',
        this.disabled ? 'ph-opacity-50' : 'ph-opacity-100',
        this.unstyled ? '' : this.backgroundColor,
        this.initialRender
          ? 'ph-duration-1 ph-invisible'
          : 'ph-duration-300 ph-visible',
        this.expandComplete ? '' : 'ph-overflow-hidden',
        shadow,
      ];

      return a;
    },

    componentPadding(): string {
      return this.mobileNoPadding ? 'ph-px-0 sm:ph-px-8' : 'ph-px-4 sm:ph-px-8';
    },

    componentRadius(): string {
      return 'sm:ph-rounded-xl';
    },
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
      const {
        accordion,
        totalHeight,
        contentHeight,
        headerHeight,
      } = this.getNode();

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
hr {
  border: none !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}

.acc-header button:focus-visible {
  outline: 4px dashed black;
}

/* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
.acc-header button:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 1px 1px 5px rgba(1, 1, 0, 0.7);
}
</style>
