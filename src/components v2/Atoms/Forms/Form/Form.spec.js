import { mount, createLocalVue } from '@vue/test-utils';
import Form from './Form.vue';
import PInput from '@/components/InputText';

describe('Form.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Form, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
      slots: {
        default: PInput,
      },
    });
  };

  it('check init text input should be empty', () => {
    const wrapper = createWrapper();
    const input = wrapper.find('input').element;
    expect(input.value).toBe('');
  });
});
