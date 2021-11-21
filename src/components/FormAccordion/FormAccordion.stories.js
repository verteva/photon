import PFormAccordion from './FormAccordion.vue';
import '../../assets/scss/main.scss';
import PCheckbox from '../Checkbox';

export default {
  title: 'Components/FormAccordion',
  component: PFormAccordion,
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

const CheckboxTemplate = (args, { argTypes }) => ({
  components: { PFormAccordion, PCheckbox },
  props: Object.keys(argTypes),
  template: `
    <div>
      <button @click="addThings" class="ph-my-10">+ ADD</button> /
      <button @click="subThings" class="ph-my-10">- REMOVE</button> / 
      <button @click="openClose" class="ph-my-10">Toggle open ({{forceOpen}})</button>
    -----  {{count}}
      <PFormAccordion v-bind="$props" v-model="forceOpen" @clearAll="clearSelection">

        Some content
        <ul>
          <li> 
            <PCheckbox
              v-for="item in items"
              v-model="item.value"
              :label="item.label"
            >
            </PCheckbox>
          </li>
        </ul>
      </PFormAccordion>
    </div>
  `,
  data() {
    return {
      things: [],
      forceOpen: true,
      count: 0,
      items: [
        {
          label: 'this is an item1',
          value: false,
        },
        {
          label: 'this is an item2',
          value: false,
        },
        {
          label: 'this is an item3',
          value: false,
        },
      ],
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
    clearSelection() {
      // console.log(value); // someValue
      this.items.filter(item => (item.value = false));
    },
  },
  // computed: {
  //   selectedLength() {
  //     return this.items.filter(item => item.value === true).length;
  //   },
  // },
});

export const CheckBox = CheckboxTemplate.bind({});
CheckBox.args = {
  shadow: true,
  noHeadingRule: true,
  openArrows: false,
  openCloseIcons: ['Edit', 'MinusBordered'],
  shadow: true,
  responsivePadding: true,
};
