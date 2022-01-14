import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Vuex from 'vuex';

export const createWrapper = (
  component: any,
  slots = { default: 'Slot Content' },
  propsOverrides = {},
  state = {},
  listeners = {}
): Wrapper<Vue> => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({ state });
  return mount(component, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots,
    store,
    listeners,
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
