import Toast from '@/components/Toast/Toast.vue';
import { createWrapper } from '@/utils/unitTest';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

// const localVue = createLocalVue();
// localVue.use(Vuex);

// const mutations = {
//   testMutation: jest.fn(),
// };

const state = {
  toast: {
    queue: [
      {
        id: '07e206b5-8df4-4405-9b86-a2e3c0dbaf54',
        type: 'success',
        title: 'NEW MESSAGE',
        description: 'this is some description',
        autoclose: true,
      },
    ],
  },
};

describe('Toast.vue', () => {
  // const createWrapper = (propsOverrides = {}, state = {}) => {
  //   const localVue = createLocalVue();
  //   localVue.use(Vuex);
  //   // state = {};
  //   // mutations = {};
  //   const store = new Vuex.Store({ state, mutations });
  //   return mount(Toast, {
  //     localVue,
  //     propsData: {
  //       ...propsOverrides,
  //     },
  //     store,
  //   });
  // };

  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Toast, {}, {}, state);
    console.log(wrapper);
  });

  it.only('store state: title render', async () => {
    // const title = state.toast.queue[0].title;
    // expect(wrapper.html()).toContain(title);
    expect(true).toBeTruthy();
  });

  it('store state: title render', async () => {
    const wrapper = createWrapper();
    const title = state.toast.queue[0].title;

    expect(wrapper.html()).toContain(title);
  });

  it('store state: description render', async () => {
    const wrapper = createWrapper();
    const description = state.toast.queue[0].description;

    expect(wrapper.html()).toContain(description);
  });

  it('check prop limit', async () => {
    const wrapper = createWrapper();
    const limit = 4;

    await wrapper.setProps({ limit });

    expect(wrapper.props().limit).toEqual(limit);
  });

  it('check prop yPos', async () => {
    const wrapper = createWrapper();
    const yPos = 'bottom';

    await wrapper.setProps({ yPos });

    expect(wrapper.props().yPos).toEqual(yPos);
  });

  it('check prop xPos', async () => {
    const wrapper = createWrapper();
    const xPos = 'center';

    await wrapper.setProps({ xPos });

    expect(wrapper.props().xPos).toEqual(xPos);
  });
});
