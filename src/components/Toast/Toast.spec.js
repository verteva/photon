import Toast from '@/components/Toast/Toast.vue';
import { createWrapper } from '@/utils/unitTest';

describe('InfoCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Toast);
  });

  it('check prop heading', async () => {
    const limit = 4;
    await wrapper.setProps({ limit });

    console.log(wrapper.props());
    expect(wrapper.props().limit).toEqual(limit);
  });
});
