import { createWrapper } from '@/utils/unitTest';
import InputPhone from './InputPhone.vue';

describe('InputPhone.vue', () => {
  let wrapper;
  let phoneInput;
  let input;
  let inputEl;
  beforeEach(() => {
    wrapper = createWrapper(InputPhone);
    phoneInput = wrapper.findComponent({ ref: 'input' });
    input = wrapper.find('.input-tel__input');
    inputEl = input.element;
  });

  it('check init input should be empty', () => {
    expect(inputEl.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', async () => {
    const placeHolder = 'eg: 0405 123 456';
    await wrapper.setProps({ placeHolder });
    expect(inputEl.placeholder).toBe(placeHolder);
  });

  it('check prop:countries is correct', async () => {
    const countries = ['AU', 'NZ'];
    await wrapper.setProps({ countries: countries });
    expect(phoneInput.attributes('style')).toContain(
      '--countriesHeight: ' + 60
    );
  });

  it('check prop:countries is correct when input value is not empty', () => {
    const value = '0405123456';
    wrapper = createWrapper(InputPhone, {}, { value });
    inputEl = wrapper.find('.input-tel__input').element;
    expect(inputEl.value).toBe(value);
  });

  test('focus handler test', async () => {
    expect(wrapper.vm.inFocus).toBe(false);

    await input.trigger('focus');

    expect(wrapper.vm.inFocus).toBe(true);

    await input.trigger('blur');

    expect(wrapper.vm.inFocus).toBe(false);
  });
});
