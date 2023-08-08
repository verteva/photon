import { shallowMount } from '@vue/test-utils';
import P2Button from './Button.vue';

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const msg = 'Button';
    const wrapper = shallowMount(P2Button, {
      propsData: {
        label: msg,
      },
    });
    const label = wrapper.find('div.label');
    expect(label.text()).toMatch(msg);
  });

  it('renders default slot label when passed', () => {
    const msg = 'Button';
    const wrapper = shallowMount(P2Button, {
      slots: {
        default: msg,
      },
    });
    const label = wrapper.find('div.label');
    expect(label.text()).toMatch(msg);
  });
});
