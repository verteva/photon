import Colors from './Colors.vue';

export default {
  title: 'Global/Colours',
  component: Colors,
};

export const Names = () => ({
  components: { Colors },
  template: '<Colors v-bind="$props" />',
});
