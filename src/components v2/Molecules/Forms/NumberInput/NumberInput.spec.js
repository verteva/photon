import { mount, createLocalVue } from '@vue/test-utils';
import NumberInput from '@/components v2/Molecules/Forms/NumberInput/NumberInput.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(NumberInput, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
  });
};

describe('NumberInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('check init value should be 0', () => {
    const input = wrapper.findComponent(NumberInput);
    expect(input.props().value).toBe(0);
  });

  it('check init input should be greater than min value', async () => {
    const minVal = 0;
    wrapper.setProps(minVal);
    expect(wrapper.vm.minVal).toEqual(minVal);
    const inputElement = wrapper.find('input');
    inputElement.find('input').setValue(minVal);
    const inputElementValue = wrapper.find('input').element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(minVal);
  });

  it('check init input should be less than min value', async () => {
    const maxVal = 20;
    await wrapper.setProps({ maxVal });
    expect(wrapper.vm.maxVal).toEqual(maxVal);
    const inputElement = wrapper.find('input');
    inputElement.find('input').setValue(maxVal);
    const inputElementValue = wrapper.find('input').element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(maxVal);
  });

  it('check change input value', async () => {
    await wrapper.setProps({ value: 10 });
    const inputIncrease = wrapper.findComponent({ ref: 'increase' });
    await inputIncrease.trigger('click');
    expect(wrapper.emitted('change:add')[0]).toEqual([]);

    const inputDecrease = wrapper.findComponent({ ref: 'decrease' });
    await inputDecrease.trigger('click');
    expect(wrapper.emitted('change:subtract')[0]).toEqual([]);
  });
});
