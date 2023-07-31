import InputMessage from './InputMessage.vue';
import { createWrapper } from '@/utils/unitTest';

describe('InputMessage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(InputMessage);
  });

  it('props: message', async () => {
    const message = 'This is a message';
    await wrapper.setProps({ message });
    expect(wrapper.html()).toContain(message);
  });

  it('props: icon', async () => {
    const icon = 'house';
    await wrapper.setProps({ icon });
    const messageWrapper = wrapper.getComponent({ ref: 'inputMessageIcon' });
    expect(messageWrapper.attributes()['data-icon']).toContain(icon);
  });
});
