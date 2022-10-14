import { createWrapper } from '@/utils/unitTest.ts';
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue';

describe('CheckboxGroup.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(CheckboxGroup);
  });

  it('check slot: label slot is setup', async () => {
    const checkboxLabel = wrapper.html();
    expect(checkboxLabel).toContain('Slot Content');
  });

  it('check props: label is setup', async () => {
    const checkboxLabel = 'Hello world';
    await wrapper.setProps({ checkboxLabel });
    const checkboxHTML = wrapper.html();
    expect(checkboxLabel).toEqual(checkboxLabel);
    expect(checkboxHTML).toContain(checkboxLabel);
  });

  it('check props: DarkBoarder is setup', async () => {
    const darkBorder = true;
    await wrapper.setProps({ darkBorder });
    const inputField = wrapper.find('.ph-checkbox-toggle');
    expect(inputField.classes()).toContain('ph-border-grey4');
  });

  it('check prop: input field checkbox is checked', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();
    expect(checkbox.element.checked).toBeTruthy();
  });

  it('check props: value change the HTML', async () => {
    const value = true;
    await wrapper.setProps({ value });
    const checkboxTick = wrapper.get('.ph-checkbox-toggle > div');
    expect(checkboxTick.classes()).toContain('ph-opacity-1');
  });
});
