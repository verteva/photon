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
  it("init value is unchecked", async () => {
    const wrapper = createWrapper();
    const input = wrapper.find("input");
    expect(input.element.checked).toBeFalsy();
  });

  it("checkbox value checked", async () => {
    const wrapper = createWrapper();
    const input = wrapper.find("input");
    await input.setChecked();
    expect(input.element.checked).toBeTruthy();
  });
});
