import FormControl from './FormControl.vue';
import { createWrapper } from '@/utils/unitTest';

describe('FormControl.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(FormControl);
  });

  it('props: label', async () => {
    const label = 'This is a label';
    await wrapper.setProps({ label });

    expect(wrapper.html()).toContain(label);
  });

  it('props: isRequired (requires: label)', async () => {
    await wrapper.setProps({ isRequired: true });

    expect(wrapper.html()).not.toContain('*');

    const label = 'This is a label';
    await wrapper.setProps({ label });

    expect(wrapper.html()).toContain('*');
  });

  it('props: inlineText (requires: label)', async () => {
    const inlineText = 'This is an inline text';
    await wrapper.setProps({ inlineText });

    expect(wrapper.html()).not.toContain(inlineText);

    const label = 'This is a label';
    await wrapper.setProps({ label });

    expect(wrapper.html()).toContain(inlineText);
  });

  it('props: extraMessage', async () => {
    const message = 'This is a message';
    await wrapper.setProps({ extraMessage: message });

    expect(wrapper.html()).toContain(message);
  });

  it('props: messageIcon', async () => {
    const icon = 'Bin';
    await wrapper.setProps({ messageIcon: icon });

    expect(wrapper.find('.icon').exists()).toBe(true);
  });

  it('props: error', async () => {
    const error = 'This is an error';
    await wrapper.setProps({ error });

    expect(wrapper.html()).toContain(error);
  });
});
