import AutoComplete from '@/components/Autocomplete/AutoComplete.vue';
import {
  createWrapper,
  assertStyleVarSetup,
  assertPropsVarSetup,
} from '@/utils/unitTest';

describe('AutoComplete.vue', () => {
  let wrapper;
  let autocomplete;
  let input;
  let openIndicator;
  beforeEach(() => {
    wrapper = createWrapper(AutoComplete);
    autocomplete = wrapper.findComponent({
      ref: 'autocomplete',
    });
    input = wrapper.findComponent({
      ref: 'input',
    });
    openIndicator = wrapper.find('.openIndicator');
  });

  it('check init input should be empty', () => {
    expect(input.element.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', async () => {
    const placeHolder = 'Please select';
    await wrapper.setProps({ placeHolder });
    expect(input.element.placeholder).toBe(placeHolder);
  });

  it('check background color variable is setup', async () => {
    const backgroundColor = '#FFFFFF';
    await wrapper.setProps({ backgroundColor });
    assertStyleVarSetup(wrapper, 'autocomplete', 'bgColor', backgroundColor);
  });

  it('check props:loading is setup correctly', async () => {
    const loading = true;
    await wrapper.setProps({ loading });
    const progressBar = wrapper.findComponent({ ref: 'progressBar' });
    expect(progressBar.classes()).toContain('ph-progress-loading');
  });

  it('check props:hideOpenIndicator is setup correctly', async () => {
    const hideOpenIndicator = true;
    await wrapper.setProps({ hideOpenIndicator });
    const openIndicator = wrapper.find('.openIndicator');
    expect(openIndicator.exists()).toBeFalsy();
  });

  it('check props:hideInputOnSelected is setup correctly', async () => {
    const hideInputOnSelected = true;
    await wrapper.setProps({ hideInputOnSelected });
    expect(input.isVisible()).toBeTruthy();
  });

  it('check props:hideClearBtn is setup correctly', async () => {
    const hideClearBtn = true;
    await wrapper.setProps({ hideClearBtn });
    assertPropsVarSetup(autocomplete, 'clearable', !hideClearBtn);
  });

  it('check props:maxHeight is setup correctly', async () => {
    const maxHeight = '200px';
    await wrapper.setProps({ maxHeight });
    assertStyleVarSetup(wrapper, 'autocomplete', 'maxHeight', maxHeight);
  });

  it('check props:prefixIcon is setup correctly', async () => {
    const prefixIcon = 'LocationSimple';
    await wrapper.setProps({ prefixIcon });
    const icon = wrapper.findComponent({ ref: 'prefixIcon' });
    assertPropsVarSetup(icon, 'name', prefixIcon);
  });

  it('check props:textColor is setup correctly', async () => {
    const textColor = '#323232';
    await wrapper.setProps({ textColor });
    assertStyleVarSetup(wrapper, 'autocomplete', 'textColor', textColor);
  });

  it('check props:highlightBackgroundColor is setup correctly', async () => {
    const highlightBackgroundColor = '#eeeeee';
    await wrapper.setProps({ highlightBackgroundColor });
    assertStyleVarSetup(
      wrapper,
      'autocomplete',
      'highlightBgColor',
      highlightBackgroundColor
    );
  });

  it('check props:borderColor is setup correctly', async () => {
    const borderColor = '#e0e0e0';
    await wrapper.setProps({ borderColor });
    assertStyleVarSetup(wrapper, 'autocomplete', 'borderColor', borderColor);
  });

  it('check props:borderFocusColor is setup correctly', async () => {
    const borderFocusColor = '#e0e0e0';
    await wrapper.setProps({ borderFocusColor });
    assertStyleVarSetup(
      wrapper,
      'autocomplete',
      'borderFocusColor',
      borderFocusColor
    );
  });

  it('check props:openIndicatorIcon is setup correctly', async () => {
    const openIndicatorIcon = 'ChevronDown';
    await wrapper.setProps({ openIndicatorIcon });
    assertPropsVarSetup(openIndicator, 'name', openIndicatorIcon);
  });

  it('check props:openIndicatorIconSize is setup correctly', async () => {
    const openIndicatorIconSize = 'xs';
    await wrapper.setProps({ openIndicatorIconSize });
    assertPropsVarSetup(openIndicator, 'type', openIndicatorIconSize);
  });

  it('check props:openIndicatorColor is setup correctly', async () => {
    const openIndicatorColor = '#009EDE';
    await wrapper.setProps({ openIndicatorColor });
    assertStyleVarSetup(
      wrapper,
      'autocomplete',
      'openIndicatorColor',
      openIndicatorColor
    );
  });

  it('check props:openIndicatorIndent is setup correctly', async () => {
    const openIndicatorIndent = '10px';
    await wrapper.setProps({ openIndicatorIndent });
    assertStyleVarSetup(
      wrapper,
      'autocomplete',
      'openIndicatorIndent',
      openIndicatorIndent
    );
  });

  it('check props:labelVar is setup correctly', async () => {
    const labelVar = 'label';
    await wrapper.setProps({ labelVar });
    assertPropsVarSetup(autocomplete, 'label', labelVar);
  });

  test('focus handler test', async () => {
    const focusHandler = AutoComplete.onFocus;
    await wrapper.setProps({ focusHandler });

    expect(wrapper.vm.focused).toBe(false);

    await input.trigger('focus');

    expect(wrapper.vm.focused).toBe(true);

    await input.trigger('blur');

    expect(wrapper.vm.focused).toBe(false);
  });
});
