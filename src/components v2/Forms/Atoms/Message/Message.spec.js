import Message from './Message.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Message.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Message);
  });

  it('props: message', async () => {
    const message = 'This is a message';
    await wrapper.setProps({ message });

    expect(wrapper.html()).toContain(message);
  });
  it('props: icon', async () => {
    const icon = 'Bin';
    await wrapper.setProps({ icon });

    expect(wrapper.find('.icon').exists()).toBe(true);
  });
});
