import { mount, createLocalVue, Wrapper } from '@vue/test-utils';

export const createWrapper = (
  component: any,
  slots = { default: 'Slot Content' },
  propsOverrides = {}
): Wrapper<Vue> => {
  const localVue = createLocalVue();
  return mount(component, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots: slots,
  });
};
