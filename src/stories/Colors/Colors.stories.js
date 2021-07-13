import Colors from './Colors.vue';

export default {
  title: 'Photon/Colour',
  component: Colors,
};

export const Palette = () => ({
  components: { Colors },
  template: '<Colors v-bind="$props" />',
});