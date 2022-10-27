import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const msg = 'Button';
    const wrapper = shallowMount(Button, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
