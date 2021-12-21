import Toast from '@/components/Toast/Toast.vue';
import { createWrapper } from '@/utils/unitTest';

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
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Toast, {}, {}, state);
  });

  it('store state: title render', async () => {
    const title = state.toast.queue[0].title;

    expect(wrapper.html()).toContain(title);
  });

  it('store state: description render', async () => {
    const description = state.toast.queue[0].description;

    expect(wrapper.html()).toContain(description);
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
