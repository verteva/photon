import { mount, createLocalVue } from '@vue/test-utils';
import InputNumber from '@/components/InputNumber/InputNumber.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(InputNumber, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
  });
};

describe('InputText.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });


  it('check init value should be 0', async () => {
    const input = wrapper.findComponent(InputNumber);
    expect(input.props().value).toBe(0);
  });
  
  it('check init input should be greater than min value', async () => {
    const minVal = 0;
    await wrapper.setProps({ minVal: minVal });
    expect(wrapper.vm.minVal).toEqual(minVal);
    const inputElement = wrapper.find('input');
    inputElement.find('input').setValue(minVal);
    const inputElementValue = wrapper.find('input').element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(minVal);
  });

  it('check init input should be less than min value', async () => {
    const maxVal = 20;
    await wrapper.setProps({ maxVal: maxVal });
    expect(wrapper.vm.maxVal).toEqual(maxVal);
    const inputElement = wrapper.find('input');
    inputElement.find('input').setValue(maxVal);
    const inputElementValue = wrapper.find('input').element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(maxVal);
  });

  it("input errors prop", async () => {
    await wrapper.setProps({ errors: ["required"] });
    expect(wrapper.vm.errors).toContain("required");
    await wrapper.find(".photon-input-error");
    const errorLabel = wrapper.find(".photon-input-error");
    expect(errorLabel.isVisible()).toBe(true);
    expect(errorLabel.text()).toBe("required");
  });
});
