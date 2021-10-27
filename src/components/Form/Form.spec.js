import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Form from '@/components/Form/Form.vue';
import PInput from '@/components/InputText';

describe('Form.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Form, {
      localVue,
      propsData: {
        ...propsOverrides
      },
      slots: {
        default: PInput
      }
    });
  };

  it('check init prop:disalbed should be false', () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.disabled).toBe(false);
  });

  it('check init text input should be empty', () => {
    const wrapper = createWrapper();
    const input = wrapper.find('input').element;
    expect(input.value).toBe('');
  });

  it('check init prop:novalidate should be true', () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.novalidate).toBe(true);
  });
});
