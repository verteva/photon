import { mount, createLocalVue } from "@vue/test-utils";
import Table from "./body/Table.vue";

describe("SkeletonLoader.vue", () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Table, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };
  it("check if prop:titles is setup correctly", () => {
    const titles = ["hello world", "cash/credit", "value", "funds"];
    const wrapper = createWrapper({ titles: titles });
    expect(wrapper.vm.titles).toEqual(titles);
  });
  it("check if prop:colWidths is setup correctly", () => {
    const colWidths = [15, 25, 25, 35];
    const wrapper = createWrapper({ colWidths: colWidths });
    expect(wrapper.vm.colWidths).toEqual(colWidths);
  });
  it("check if prop:colWidths is setup correctly", () => {
    const leftAlign = true;
    const wrapper = createWrapper({ leftAlign: leftAlign });
    expect(wrapper.vm.leftAlign).toEqual(leftAlign);
  });
  it("check if prop:rounded is setup correctly", () => {
    const rounded = true;
    const wrapper = createWrapper({ rounded: rounded });
    expect(wrapper.vm.rounded).toEqual(rounded);
  });

  it("check if prop:rounded is setup correctly", () => {
    const wrapper = createWrapper();
    expect(wrapper.html()).toContain(
      "table-wrapper ph-font-bold ph-text-white table-header"
    );
  });
});
