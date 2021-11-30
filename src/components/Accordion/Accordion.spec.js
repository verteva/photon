import Accordion from '@/components/Accordion/Accordion.vue';
import {
  createWrapper,
  assertStyleVarSetup,
  // assertPropsVarSetup,
} from '@/utils/unitTest';

describe('Accordion.vue', () => {
  let wrapper;
  const test = '123';
  beforeEach(() => {
    wrapper = createWrapper(Accordion);
  });

  it('check props: header text', async () => {
    const headerText = 'This is the header';
    await wrapper.setProps({ section: headerText });
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
    const accordionContent = wrapper.getComponent({ ref: 'accordionContent' });
    expect(accordionContent.isVisible()).toBe(false);
    await wrapper.getComponent({ ref: 'accordionHeader' }).trigger('click');
    expect(accordionContent.element.style.display).toEqual('initial');
    expect(accordionContent.isVisible()).toBe(true);
    expect(accordionContent.html()).toContain('Slot Content</div>');
  });

  it('check props: unstyled', async () => {
    const unstyled = true;
    const bgClass = wrapper.props().backgroundColor;
    await wrapper.setProps({ unstyled: unstyled });
    expect(wrapper.props().unstyled).toBe(unstyled);
    const accordion = wrapper.getComponent({ ref: 'accordion' });
    expect(accordion.classes()).not.toContain(bgClass);
  });

  it('check props: unstyled', async () => {
    const unstyled = true;
    await wrapper.setProps({ unstyled });
    expect(wrapper.props().unstyled).toBe(unstyled);
    const accordion = wrapper.getComponent({ ref: 'accordion' });
    expect(accordion.classes()).not.toContain('ph-bg-grey6');
  });

  it('check props: if has checkbox', async () => {
    const checkboxTemplate = `       <ul>
    <li v-for="item in items"> 
      <p-checkbox
        v-model="item.value"
        :label="item.label"
      />
    </li>
  </ul>`;

    console.log(wrapper);
    const isCheckbox = true;
    const items = [
      {
        label: 'this is an item1',
        value: false,
      },
      {
        label: 'this is an item2',
        value: false,
      },
      {
        label: 'this is an item3',
        value: false,
      },
    ];

    await wrapper.setProps({ isCheckbox });
    await wrapper.setProps({ items });
    const content = wrapper.getComponent({ ref: 'accordionContent' });
    console.log(content.html());
  });

  // it.only('check props: toggle accordion', async () => {
  //   const accordionToggle = true;
  //   await wrapper.setData({ expanded: accordionToggle, id: '123456789' });
  //   // await wrapper.vm.$nextTick();
  //   await wrapper.setProps({ value: accordionToggle });
  //   await console.log(1, wrapper.vm.id);
  //   await wrapper.vm.getNode();

  //   await console.log(1, wrapper.vm.expanded);
  //   await console.log(2, wrapper.props().value);
  //   const el = wrapper.findComponent({ ref: 'accordion' });
  //   // console.log(el.attributes('style'));
  //   expect(true).toEqual(true);
  // });
});
