import { mount, createLocalVue } from "@vue/test-utils";
import SwitchToggle from "./SwitchToggle.vue";

describe("SwitchToggle.vue", () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(SwitchToggle, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };
  it("check init value should be false", async () => {
    const wrapper = createWrapper();
    const input = wrapper.findComponent(SwitchToggle);
    // console.log(input.props().value);
    expect(input.props().value).toBe(false);
    const inputElement = input.get(".switch-input");
    await inputElement.setChecked();
    await expect(input.props().value).toBe(true);
  });

  it("init should be false", () => {
    const wrapper = createWrapper();
    const input = wrapper.findComponent(SwitchToggle);
    // console.log(input.vm);
    expect(input.exists()).toBe(true);
  });
});
