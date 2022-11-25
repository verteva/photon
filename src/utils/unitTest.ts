import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import { VueConstructor } from 'vue';
import Vuex from 'vuex';

export const createWrapper = (
  component: VueConstructor,
  slots = { default: 'Slot Content' },
  propsOverrides = {},
  state = {},
  listeners = {}
): Wrapper<Vue> => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({ state });
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  return mount(component, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots,
    store,
    listeners,
    attachTo: '#root',
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
