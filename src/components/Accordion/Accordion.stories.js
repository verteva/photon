import PAccordion from './Accordion.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Components/Accordion',
  component: PAccordion,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#efefef' },
        { name: 'dark', value: '#444444' },
      ],
    },
  },
};

const SimpleTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <div>
      <button @click="addThings" class="ph-my-10">+ ADD</button> /
      <button @click="subThings" class="ph-my-10">- REMOVE</button> / 
      <button @click="openClose" class="ph-my-10">Toggle open ({{forceOpen}})</button>

      <PAccordion v-bind="$props" v-model="forceOpen" no-heading-rule shadow>
        <template v-slot:heading>
          Heading
        </template>
        Some content
        <ul>
          <li v-for="thing in things" :key="thing">{{thing}}</li>
        </ul>
        
      </PAccordion>
    </div>
  `,
  data() {
    return {
      things: [],
      forceOpen: true,
    };
  },
  methods: {
    openClose() {
      this.forceOpen = !this.forceOpen;
    },
    addThings() {
      this.things.push(Math.random());
    },
    subThings() {
      this.things = this.things.slice(1, this.things.length);
    },
  },
});
export const Simple = SimpleTemplate.bind({});

const NestedTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
  <PAccordion section="Level 1" v-model="test" stay-open>
    <div class='ph-mb-5 ph-py-5 ph-px-10'>
      Some static HTML content...
    </div>
    <PAccordion class="ph-mb-1" section="Level 2a" open background-color="ph-bg-white" :border="false" shadow>
      Lorem ipsum...
    </PAccordion>
    <PAccordion section="Level 2b" background-color="ph-bg-white" :border="false" shadow>
      Hello world!
    </PAccordion>
  </PAccordion>
  `,
  data() {
    return {
      test: null,
    };
  },
});
export const Nested = NestedTemplate.bind({});

const SingleFocusTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes), 
  template: `
    <div>
      <PAccordion
        class="ph-mb-2"
        v-bind="$props"
        single-focus
        :section="openId === 'a' ? 'Item 1 open' : '-'"
        :complete="openId === 'a'"
        @toggle="handleToggle"
        identifier="a"
        :open="openId === 'a'"
      >
        Item 1
      </PAccordion>
      <PAccordion
        class="ph-mb-2"
        v-bind="$props"
        single-focus
        :section="openId === 'b' ? 'Item 2 open' : '-'"
        :complete="openId === 'b'"
        @toggle="handleToggle"
        identifier="b"
        :open="openId === 'b'"
      >
        Item 2
      </PAccordion>
      <PAccordion
        v-bind="$props"
        single-focus
        :section="openId === 'c' ? 'Item 3 open' : '-'"
        :complete="openId === 'c'"
        @toggle="handleToggle"
        identifier="c"
        :open="openId === 'c'"
      >
        Item 3
      </PAccordion>
    </div>      
  `,
  data() {
    return {
      openId: null,
    };
  },
  methods: {
    handleToggle(id) {
      this.openId = id;
    }
  }
});
export const SingleFocus = SingleFocusTemplate.bind({});

const UnstyledTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PAccordion v-bind="$props" section="Section 1" unstyled>
        Hello
      </PAccordion>
      <PAccordion v-bind="$props" section="Section 2" unstyled :full-width="false">
        <a href="#">Link C</a></br />
        <a href="#">Link D</a></br />
        <a href="#">Link E</a></br />
        <a href="#">Link F</a>
      </PAccordion>
    </div>
  `,
});
export const Unstyled = UnstyledTemplate.bind({});
