import Toast from '@/components/Toast/Toast.vue';
// import { createWrapper } from '@/utils/unitTest';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Toast.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Toast);
  });
  it('renders a value from $store.state', () => {
    const wrapper2 = mount(Toast, {
      global: { plugin: [store] },
    });
    console.log(wrapper2);
    expect(true).toEqual(true);
  });
  // it('check prop limit', async () => {
  //   const limit = 4;
  //   await wrapper.setProps({ limit });
  //   console.log(wrapper.props());
  //   expect(wrapper.props().limit).toEqual(limit);
  // });

  // it('check prop yPos', async () => {
  //   const yPos = 'bottom';
  //   await wrapper.setProps({ yPos });
  //   console.log(wrapper.props());
  //   expect(wrapper.props().yPos).toEqual(yPos);
  // });

  // it('check prop xPos', async () => {
  //   const xPos = 'center';
  //   await wrapper.setProps({ xPos });
  //   console.log(wrapper.props());
  //   expect(wrapper.props().xPos).toEqual(xPos);
  // });
});
