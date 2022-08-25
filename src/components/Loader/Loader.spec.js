import { shallowMount } from '@vue/test-utils';
import Loader from './Loader.vue';

describe('Loader.vue', () => {
  it('renders the Loader', () => {
    const msg = 'Button';
    const wrapper = shallowMount(Button, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
