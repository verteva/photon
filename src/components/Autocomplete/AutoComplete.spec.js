import { mount, createLocalVue } from '@vue/test-utils';
import AutoComplete from '@/components/Autocomplete/AutoComplete.vue';

describe('AutoComplete.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(AutoComplete, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

  const assertStyleVarSetup = (wrapper, styleName, style) => {
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    return expect(autocomplete.attributes('style')).toContain('--'+styleName+': '+style);
  }

  const assertPropsVarSetup = (component, propsName, propsVal) => {
    return expect(component.props(propsName)).toBe(propsVal);
  }

  it('check init input should be empty', () => {
    const wrapper = createWrapper();
    const input = wrapper.findComponent({ ref: 'input' }).element;
    expect(input.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', () => {
    const placeHolder = 'Please select';
    const wrapper = createWrapper({ placeHolder: placeHolder})
    const input = wrapper.findComponent({ ref: 'input' }).element;
    expect(input.placeholder).toBe(placeHolder);
  });

  it('check background color variable is setup', () => {
    const backgroundColor = '#FFFFFF';
    const wrapper = createWrapper({ backgroundColor: backgroundColor });
    assertStyleVarSetup(wrapper, 'bgColor', backgroundColor);
  });

  it('check props:loading is setup correctly', () => {
    const loading = true;
    const wrapper = createWrapper({ loading: loading });
    const progressBar = wrapper.findComponent({ ref: 'progressBar' });
    expect(progressBar.classes()).toContain('ph-progress-loading');
  });

  it('check props:hideOpenIndicator is setup correctly', () => {
    const hideOpenIndicator = true;
    const wrapper = createWrapper({ hideOpenIndicator: hideOpenIndicator });
    const openIndicator = wrapper.find('.openIndicator');
    expect(openIndicator.exists()).toBeFalsy();
  });

  it('check props:hideInputOnSelected is setup correctly', () => {
    const hideInputOnSelected = true;
    const wrapper = createWrapper({ hideInputOnSelected: hideInputOnSelected });
    const input = wrapper.findComponent({ ref: 'input' });
    expect(input.isVisible()).toBeTruthy();
  });

  it('check props:hideClearBtn is setup correctly', () => {
    const hideClearBtn = true;
    const wrapper = createWrapper({ hideClearBtn: hideClearBtn });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    assertPropsVarSetup(autocomplete, 'clearable', !hideClearBtn);
  });

  it('check props:maxHeight is setup correctly', () => {
    const maxHeight = '200px';
    const wrapper = createWrapper({ maxHeight: maxHeight });
    assertStyleVarSetup(wrapper, 'maxHeight', maxHeight);
  });

  it('check props:prefixIcon is setup correctly', () => {
    const prefixIcon = 'LocationSimple';
    const wrapper = createWrapper({ prefixIcon: prefixIcon });
    const icon = wrapper.findComponent({ ref: 'prefixIcon' });
    assertPropsVarSetup(icon, 'name', prefixIcon);
  });

  it('check props:textColor is setup correctly', () => {
    const textColor = '#323232';
    const wrapper = createWrapper({ textColor: textColor });
    assertStyleVarSetup(wrapper, 'textColor', textColor);
  });

  
  it('check props:highlightBackgroundColor is setup correctly', () => {
    const highlightBackgroundColor = '#eeeeee';
    const wrapper = createWrapper({ highlightBackgroundColor: highlightBackgroundColor });
    assertStyleVarSetup(wrapper, 'highlightBgColor', highlightBackgroundColor);
  });

  it('check props:borderColor is setup correctly', () => {
    const borderColor = '#e0e0e0';
    const wrapper = createWrapper({ borderColor: borderColor });
    assertStyleVarSetup(wrapper, 'borderColor', borderColor);
  });

  it('check props:borderFocusColor is setup correctly', () => {
    const borderFocusColor = '#e0e0e0';
    const wrapper = createWrapper({ borderFocusColor: borderFocusColor });
    assertStyleVarSetup(wrapper, 'borderFocusColor', borderFocusColor);
  });

  it('check props:openIndicatorIcon is setup correctly', () => {
    const openIndicatorIcon = 'ChevronDown';
    const wrapper = createWrapper({ openIndicatorIcon: openIndicatorIcon });
    const openIndicator = wrapper.find('.openIndicator');
    assertPropsVarSetup(openIndicator, 'name', openIndicatorIcon);
  });

  it('check props:openIndicatorIconSize is setup correctly', () => {
    const openIndicatorIconSize = 'xs';
    const wrapper = createWrapper({ openIndicatorIconSize: openIndicatorIconSize });
    const openIndicator = wrapper.find('.openIndicator');
    assertPropsVarSetup(openIndicator, 'type', openIndicatorIconSize);
  });

  it('check props:openIndicatorColor is setup correctly', () => {
    const openIndicatorColor = '#009EDE';
    const wrapper = createWrapper({ openIndicatorColor: openIndicatorColor });
    assertStyleVarSetup(wrapper, 'openIndicatorColor', openIndicatorColor);
  });

  it('check props:openIndicatorIndent is setup correctly', () => {
    const openIndicatorIndent = '10px';
    const wrapper = createWrapper({ openIndicatorIndent: openIndicatorIndent });
    assertStyleVarSetup(wrapper, 'openIndicatorIndent', openIndicatorIndent);
  });

  it('check props:labelVar is setup correctly', () => {
    const labelVar = 'label';
    const wrapper = createWrapper({ labelVar: labelVar });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    assertPropsVarSetup(autocomplete, 'label', labelVar)
  });

  test('focus handler test', async () => {
    const focusHandler = AutoComplete.onFocus;
    const wrapper = createWrapper({ focusHandler })

    const input = wrapper.findComponent({ ref: 'input' });

    expect(wrapper.vm.focused).toBe(false)

    await input.trigger('focus')

    expect(wrapper.vm.focused).toBe(true)

    await input.trigger('blur')

    expect(wrapper.vm.focused).toBe(false)
  })
});
