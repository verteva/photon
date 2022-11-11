import { mount, createLocalVue } from '@vue/test-utils';
import Toggle from './Toggle.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(Toggle, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
  });
};

describe('Atoms/Toggle.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('init value is unchecked', async () => {
    const input = wrapper.find('input');
    expect(input.element.checked).toBeFalsy();
  });

  it('checkbox value checked', async () => {
    const input = wrapper.find('input');
    await input.setChecked();
    expect(input.element.checked).toBeTruthy();
  });
});
