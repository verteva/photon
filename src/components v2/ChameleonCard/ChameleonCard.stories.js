import ChameleonCard from './index';

export default {
  title: 'Chameleon/Card',
  component: ChameleonCard,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ChameleonCard },
  props: Object.keys(argTypes),
  template: `
    <ChameleonCard v-bind='$props'>
    Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
    </br>
    </br>
    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.
    </br>
    </br>
    Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
    </ChameleonCard>
  `,
});

export const Default = Template.bind({});
Default.args = {};
