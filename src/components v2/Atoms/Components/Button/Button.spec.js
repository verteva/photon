import { shallowMount } from '@vue/test-utils';
import PButton from './Button.vue';

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const msg = 'Button';
    const wrapper = shallowMount(PButton, {
      propsData: {
        label: msg,
      },
    });
    const label = wrapper.find('div.label');
    expect(label.text()).toMatch(msg);
  });

  it('renders default slot label when passed', () => {
    const msg = 'Button';
    const wrapper = shallowMount(PButton, {
      slots: {
        default: msg,
      },
    });
    const label = wrapper.find('div.label');
    expect(label.text()).toMatch(msg);
  });
});
