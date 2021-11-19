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

export const assertStyleVarSetup = (
  wrapper: Wrapper<Vue>,
  refName: string,
  styleName: string,
  style: string
): void => {
  const el = wrapper.findComponent({ ref: refName });
  return expect(el.attributes('style')).toContain(
    '--' + styleName + ': ' + style
  );
};

export const assertPropsVarSetup = (
  component: Wrapper<Vue>,
  propsName: string,
  propsVal: string
): void => {
  return expect(component.props(propsName)).toBe(propsVal);
};
