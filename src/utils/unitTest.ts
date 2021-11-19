import { mount, createLocalVue, Wrapper } from '@vue/test-utils';

export const createWrapper = (
  component: any,
  propsOverrides = {}
): Wrapper<Vue> => {
  const localVue = createLocalVue();
  return mount(component, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots: {
      default: 'Slot Content',
    },
  });
};
