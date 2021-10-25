import { mount, createLocalVue } from "@vue/test-utils";
import SwitchToggle from "./SwitchToggle.vue";

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(SwitchToggle, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
  });
};
describe("SwitchToggle.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("init value is unchecked", async () => {
    const input = wrapper.find("input");
    expect(input.element.checked).toBeFalsy();
  });

  it("checkbox value checked", async () => {
    const input = wrapper.find("input");
    await input.setChecked();
    expect(input.element.checked).toBeTruthy();
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
