import ErrorMessage from './ErrorMessage.vue';
import { createWrapper } from '@/utils/unitTest';

describe('ErrorMessage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(ErrorMessage);
  });

  it('props: error', async () => {
    const error = 'This is an error';
    await wrapper.setProps({ error });

    expect(wrapper.html()).toContain(error);
  });
});
