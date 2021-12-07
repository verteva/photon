import InputRadio from '@/components/InputRadio/InputRadio.vue';
import { createWrapper } from '@/utils/unitTest';

describe('RadioGroup.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(InputRadio);
  });

  it('props: label', async () => {
    await wrapper.setProps({ label: 'hello world label' });
    expect(wrapper.html()).toContain('hello world label');
  });

  it('props: input name', async () => {
    await wrapper.setProps({ name: 'email' });
    const radioInput = wrapper.getComponent({ ref: 'radioItem' });
    expect(radioInput.attributes().name).toBe('email');
  });

  it('props: darkMode', async () => {
    expect(wrapper.html()).toContain('ph-bg-white');
    await wrapper.setProps({ darkMode: true });
    expect(wrapper.html()).toContain('ph-bg-grey6');
  });

  it('event: emit value', async () => {
    await wrapper.setProps({ valueRadio: 999 });
    const emitValue = wrapper.props().valueRadio;
    wrapper.vm.$emit('input', emitValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([999]);
  });

  it('prop: icon', async () => {
    await wrapper.setProps({ icon: 'AddToWallet' });
    expect(wrapper.props().icon).toEqual('AddToWallet');
  });
});
