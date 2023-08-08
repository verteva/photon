import { createWrapper } from '@/utils/unitTest.ts';
import RadioButton from './RadioButton.vue';

describe('RadioButton.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(RadioButton);
  });

  it('props: label', async () => {
    const label = 'This is a label';
    await wrapper.setProps({ label });
    expect(wrapper.html()).toContain(label);
  });

  it('props: value', async () => {
    const checked = true;
    await wrapper.setProps({ checked });
    const radioButton = wrapper.find('input[type="radio"]');
    expect(radioButton.element.checked).toBeTruthy();
  });

  it('props: disabled', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });
    expect(wrapper.html()).toContain('ph-radio-disabled');
  });

  it('props: icon', async () => {
    const icon = 'house';
    await wrapper.setProps({ icon });
    const childIcon = await wrapper.findComponent({
      name: 'font-awesome-icon',
    });
    expect(childIcon).toBeTruthy();
  });

  it('emit: click', async () => {
    const radioButton = await wrapper.find('input[type="radio"]');
    await radioButton.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
