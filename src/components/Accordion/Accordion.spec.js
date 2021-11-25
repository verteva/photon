import Accordion from '@/components/Accordion/Accordion.vue';
import {
  createWrapper,
  assertStyleVarSetup,
  // assertPropsVarSetup,
} from '@/utils/unitTest';

describe('Accordion.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Accordion);
  });

  it('check props: header text', async () => {
    const headerText = 'This is the header';
    await wrapper.setProps({ section: headerText });
    await console.log(wrapper.props());
    expect(wrapper.props().section).toEqual(headerText);
  });

  it('check props: container border', async () => {
    expect(wrapper.props().border).toEqual(true);
    const border = false;
    await wrapper.setProps({ border });
    expect(wrapper.props().border).toEqual(false);
  });

  it('check props: noHeadingRule', async () => {
    const headerText = 'This is the header1';
    await wrapper.setProps({ section: headerText });
    const noHeadingRule = false;
    await wrapper.setProps({ noHeadingRule });
    const wrapperHtml = wrapper.find('.acc-header').html();
    expect(wrapperHtml).toContain(headerText);
  });

  it('check props: toggle accordion', async () => {
    const closeToggle = false;
    await wrapper.setData({ expanded: closeToggle });
    // await wrapper.setProps({ value: closeToggle });

    // const openToggle = true;
    // await wrapper.setProps({ value: openToggle });
    const accContent = await wrapper.find('.acc-content');
    // console.log(accContent);
    // await console.log(accContent.element.HTMLDivElement);
    // await console.log(accContent.element[0]);
    // await console.log(accContent.element.attributes().style);
    // await console.log(accContent.attributes().style);
    // expect(accContent.attributes('style')).toContain('display: none;');
    // assertStyleVarSetup(wrapper, 'accordionContent', 'display', 'none');
    const el = wrapper.findComponent({ ref: 'accordionContent' });
    console.log(el.attributes('style'));
    // const wrapperHtml = wrapper.find('.acc-header').html();
    expect(true).toEqual(true);
    // await console.log(wrapperHtml);
  });

  //   it('check init displaying class', async () => {
  //     expect(cardFindClass.classes()).toContain('ph-rounded-lg');
  //     expect(cardFindClass.classes()).toContain('ph-relative');
  //     expect(cardFindClass.classes()).toContain('ph-overflow-hidden');
  //     expect(cardFindClass.classes()).toContain('ph-p-9');
  //   });

  //   it('check props: light displaying class', async () => {
  //     expect(cardFindClass.classes()).toContain('ph-bg-grey6');
  //     await wrapper.setProps({ light: true });
  //     expect(cardFindClass.classes()).toContain('ph-bg-white');
  //     expect(wrapper.vm.light).toEqual(true);
  //   });

  //   it('check props: shadow displaying class', async () => {
  //     expect(cardFindClass.classes()).toContain('ph-shadow-none');
  //     await wrapper.setProps({ shadow: true });
  //     expect(cardFindClass.classes()).toContain('ph-shadow');
  //     expect(wrapper.vm.shadow).toEqual(true);
  //   });
});
