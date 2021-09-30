import PList from './List.vue';
import PLi from '../ListItem';

export default {
  title: 'Components/List',
  component: PList,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PList, PLi },
  props: Object.keys(argTypes),
  template: `
    <div>
      Shopping list
      <p-list class="ph-mb-10">
        <p-li class="ph-ml-2">Ham</p-li>
        <p-li class="ph-ml-2">Carrots</p-li>
        <p-li class="ph-ml-2">Milk</p-li>
      </p-list>

      Top 3 movies
      <p-list list-type="decimal" list-color="brand1">
        <p-li class="ph-ml-2">Back to the fut ;ksfdskf;k ;kf;kf ;sdkf ;skfskf ;sdkfdsfkgpdofjgodfjgdofjgodf gjdj gjgipdfjg pdjgpdf jgdfpjgre 3</p-li>
        <p-li class="ph-ml-2">Inception</p-li>
        <p-li class="ph-ml-2">Platoon</p-li>
      </p-list>

    </div>
  `,
});

export const List = Template.bind({});
List.args = {
  // Props to be passed....
};
