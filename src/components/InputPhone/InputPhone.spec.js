import { mount, createLocalVue } from '@vue/test-utils';
import InputPhone from './InputPhone.vue';

describe('InputPhone.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(InputPhone, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

  it('check init input should be empty', () => {
    const wrapper = createWrapper();
    const input = wrapper.find('.input-tel__input').element;
    expect(input.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', () => {
    const placeHolder = 'eg: 0405 123 456';
    const wrapper = createWrapper({ placeHolder: placeHolder });
    const input = wrapper.find('.input-tel__input').element;
    expect(input.placeholder).toBe(placeHolder);
  });

  it('check prop:countries is correct', () => {
    const countries = ['AU', 'NZ'];
    const wrapper = createWrapper({ countries: countries });
    const input = wrapper.findComponent({ ref: 'input' });
    expect(input.attributes('style')).toContain('--countriesHeight: ' + 60);
  });

  it('check prop:countries is correct when input value is not empty', () => {
    const value = '0405123456';
    const wrapper = createWrapper({ value: value });
    const input = wrapper.find('.input-tel__input').element;
    expect(input.value).toBe(value);
  });

  test('focus handler test', async () => {
    const wrapper = createWrapper({});

    const input = wrapper.find('.input-tel__input');

    expect(wrapper.vm.inFocus).toBe(false);

    await input.trigger('focus');

    expect(wrapper.vm.inFocus).toBe(true);

    await input.trigger('blur');

    expect(wrapper.vm.inFocus).toBe(false);
  });
});
