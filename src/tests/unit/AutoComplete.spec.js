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
});
