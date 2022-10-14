import { createWrapper } from '@/utils/unitTest.ts';
import Checkbox from '@/components/Checkbox/Checkbox.vue';

describe('Checkbox.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Checkbox);
  });

  it('props: label', async () => {
    const label = 'This is a label';
    await wrapper.setProps({ label });

    expect(wrapper.html()).toContain(label);
  });

  it('props: value', async () => {
    const value = true;
    await wrapper.setProps({ value });

    const checkbox = wrapper.find('input[type="checkbox"]');

    expect(checkbox.element.checked).toBeTruthy();
  });

  it('props: disabled', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });

    expect(wrapper.html()).toContain('disabled');
  });

  it('emit: input', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });
  it('emit: input [value = true]', async () => {
    const value = true;
    await wrapper.setProps({ value });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });
});
