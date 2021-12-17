import Toast from '@/components/Toast/Toast.vue';
// import { createWrapper } from '@/utils/unitTest';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn(),
};

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
const store = new Vuex.Store({ state, mutations });
const onClick = jest.fn();
describe('Toast.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Toast, {
      listeners: {
        click: onClick,
      },
      store,
      localVue,
    });
  });

  it('store state: title render', async () => {
    await wrapper.trigger('click');
    console.log(wrapper.html());
    // expect(onClick).toHaveBeenCalled();
    expect(wrapper.html()).toContain('NEW MESSAGE');
  });

  it('store state: description render', async () => {
    expect(wrapper.html()).toContain('this is some description');
  });

  it('check prop limit', async () => {
    const limit = 4;
    await wrapper.setProps({ limit });
    expect(wrapper.props().limit).toEqual(limit);
  });

  it('check prop yPos', async () => {
    const yPos = 'bottom';
    await wrapper.setProps({ yPos });
    expect(wrapper.props().yPos).toEqual(yPos);
  });

  it('check prop xPos', async () => {
    const xPos = 'center';
    await wrapper.setProps({ xPos });
    expect(wrapper.props().xPos).toEqual(xPos);
  });
});
