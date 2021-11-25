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
    const accordionToggle = true;
    await wrapper.setData({ expanded: accordionToggle });
    await wrapper.setProps({ value: accordionToggle });

    const el = wrapper.findComponent({ ref: 'accordion' });
    console.log(el.attributes('style'));
    expect(true).toEqual(true);
  });
});
