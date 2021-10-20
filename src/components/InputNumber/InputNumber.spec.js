import { mount, createLocalVue } from "@vue/test-utils";
import InputNumber from "@/components/InputNumber/InputNumber.vue";

describe("InputText.vue", () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(InputNumber, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };
  it("check init value should be 0", async () => {
    const wrapper = createWrapper();
    const input = wrapper.findComponent(InputNumber);
    expect(input.props().value).toBe(0);
  });
  it("check init input should be greater than min value", () => {
    const minVal = 0;
    const wrapper = createWrapper({ minVal: minVal });
    expect(wrapper.vm.minVal).toEqual(minVal);
    const inputElement = wrapper.find("input");
    inputElement.find("input").setValue(minVal);
    const inputElementValue = wrapper.find("input").element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(minVal);
  });
  it("check init input should be less than min value", () => {
    const maxVal = 20;
    const wrapper = createWrapper({ maxVal: maxVal });
    expect(wrapper.vm.maxVal).toEqual(maxVal);
    const inputElement = wrapper.find("input");
    inputElement.find("input").setValue(maxVal);
    const inputElementValue = wrapper.find("input").element.value;
    expect(Number(inputElementValue)).toBeGreaterThanOrEqual(maxVal);
  });
});
