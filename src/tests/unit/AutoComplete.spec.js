import { mount, shallowMount } from '@vue/test-utils';
import AutoComplete from '@/components/Autocomplete/AutoComplete.vue';

describe('AutoComplete.vue', () => {
  it('check init input should be empty', () => {
    const wrapper = mount(AutoComplete, {
      propsData: {  },
    });
    const input = wrapper.findComponent({ ref: 'input' }).element;
    expect(input.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', () => {
    const placeHolder = 'Please select';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        placeHolder: placeHolder
      },
    });
    const input = wrapper.findComponent({ ref: 'input' }).element;
    expect(input.placeholder).toBe(placeHolder);
  });

  it('check background color variable is setup', () => {
    const backgroundColor = '#FFFFFF';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        backgroundColor: backgroundColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--bgColor: '+backgroundColor);
  });

  it('check props:loading is setup correctly', () => {
    const loading = true;
    const wrapper = mount(AutoComplete, {
      propsData: { 
        loading: loading
      },
    });
    const progressBar = wrapper.findComponent({ ref: 'progressBar' });
    expect(progressBar.classes()).toContain('ph-progress-loading');
  });

  it('check props:hideOpenIndicator is setup correctly', () => {
    const hideOpenIndicator = true;
    const wrapper = mount(AutoComplete, {
      propsData: { 
        hideOpenIndicator: hideOpenIndicator
      },
    });
    const openIndicator = wrapper.find('.openIndicator');
    expect(openIndicator.exists()).toBeFalsy();
  });

  it('check props:hideInputOnSelected is setup correctly', () => {
    const hideInputOnSelected = true;
    const wrapper = mount(AutoComplete, {
      propsData: { 
        hideInputOnSelected: hideInputOnSelected
      },
    });
    const input = wrapper.findComponent({ ref: 'input' });
    expect(input.isVisible()).toBeTruthy();
  });

  it('check props:hideClearBtn is setup correctly', () => {
    const hideClearBtn = true;
    const wrapper = mount(AutoComplete, {
      propsData: { 
        hideClearBtn: hideClearBtn
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.props('clearable')).toBe(!hideClearBtn);
  });

  it('check props:maxHeight is setup correctly', () => {
    const maxHeight = '200px';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        maxHeight: maxHeight
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--maxHeight: '+maxHeight);
  });

  it('check props:prefixIcon is setup correctly', () => {
    const prefixIcon = 'LocationSimple';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        prefixIcon: prefixIcon
      },
    });
    const icon = wrapper.findComponent({ ref: 'prefixIcon' });
    expect(icon.props("name")).toBe(prefixIcon);
  });

  it('check props:textColor is setup correctly', () => {
    const textColor = '#323232';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        textColor: textColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--textColor: '+textColor);
  });

  
  it('check props:highlightBackgroundColor is setup correctly', () => {
    const highlightBackgroundColor = '#eeeeee';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        highlightBackgroundColor: highlightBackgroundColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--highlightBgColor: '+highlightBackgroundColor);
  });

  it('check props:borderColor is setup correctly', () => {
    const borderColor = '#e0e0e0';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        borderColor: borderColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--borderColor: '+borderColor);
  });

  it('check props:borderFocusColor is setup correctly', () => {
    const borderFocusColor = '#e0e0e0';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        borderFocusColor: borderFocusColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--borderFocusColor: '+borderFocusColor);
  });

  it('check props:openIndicatorIcon is setup correctly', () => {
    const openIndicatorIcon = 'ChevronDown';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        openIndicatorIcon: openIndicatorIcon
      },
    });
    const openIndicator = wrapper.find('.openIndicator');
    expect(openIndicator.props('name')).toBe(openIndicatorIcon);
  });

  it('check props:openIndicatorIconSize is setup correctly', () => {
    const openIndicatorIconSize = 'xs';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        openIndicatorIconSize: openIndicatorIconSize
      },
    });
    const openIndicator = wrapper.find('.openIndicator');
    expect(openIndicator.props('type')).toBe(openIndicatorIconSize);
  });

  it('check props:openIndicatorColor is setup correctly', () => {
    const openIndicatorColor = '#009EDE';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        openIndicatorColor: openIndicatorColor
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--openIndicatorColor: '+openIndicatorColor);
  });

  it('check props:openIndicatorIndent is setup correctly', () => {
    const openIndicatorIndent = '10px';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        openIndicatorIndent: openIndicatorIndent
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.attributes('style')).toContain('--openIndicatorIndent: '+openIndicatorIndent);
  });

  it('check props:labelVar is setup correctly', () => {
    const labelVar = 'label';
    const wrapper = mount(AutoComplete, {
      propsData: { 
        labelVar: labelVar
      },
    });
    const autocomplete = wrapper.findComponent({ ref: 'autocomplete' });
    expect(autocomplete.props('label')).toBe(labelVar)
  });

  test('focus handler test', async () => {
    
    const focusHandler = AutoComplete.onFocus;
    const wrapper = mount(AutoComplete, {
      propsData: { focusHandler }
    })

    const input = wrapper.findComponent({ ref: 'input' });
    await input.trigger('focus')

    expect(wrapper.vm.focused).toBe(true)
  })
});
