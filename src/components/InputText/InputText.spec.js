import { mount, createLocalVue } from '@vue/test-utils';
import InputText from '@/components/InputText/InputText.vue';

describe('InputText.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(InputText, {
      localVue,
      propsData: {
        ...propsOverrides
      }
    });
  };

  const getInput = wrapper => {
    return wrapper.find('input').element;
  };

  const event = { preventDefault: () => null };

  beforeEach(() => {
    jest.spyOn(event, 'preventDefault');
  });

  it('check init input should be empty', () => {
    const wrapper = createWrapper();
    const input = getInput(wrapper);
    expect(input.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', () => {
    const placeholder = 'Please select';
    const wrapper = createWrapper({ placeholder: placeholder });
    const input = getInput(wrapper);
    expect(input.placeholder).toBe(placeholder);
  });

  it('check darkmode is correct', () => {
    const darkMode = true;
    const wrapper = createWrapper({ darkMode: darkMode });
    const input = wrapper.find('input');
    expect(input.classes()).toContain('ph-bg-grey6');
  });

  it('check props:number is correct setup', async () => {
    const number = true;
    const wrapper = createWrapper({ number: number });
    event.keyCode = 32;
    await wrapper.vm.validatePress(event);
    await wrapper.vm.$nextTick();
    expect(event.preventDefault).toBeCalled();
  });
});
