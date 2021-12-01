import Accordion from '@/components/Accordion/Accordion.vue';
import { mount } from '@vue/test-utils';
import PCheckbox from '../Checkbox';
import { createWrapper } from '@/utils/unitTest';

describe('Accordion.vue', () => {
  let wrapper;
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
    await wrapper.setData({ expanded: false });
    const accordionContent = wrapper.getComponent({ ref: 'accordionContent' });
    expect(accordionContent.classes()).toContain('ph-display-none');
    await wrapper.getComponent({ ref: 'accordionHeader' }).trigger('click');
    expect(accordionContent.classes()).not.toContain('ph-display-none');
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

  it('check props: if has checkbox', async () => {
    const checkboxHTML = {
      template: `<div>
          {{items}}
            <ul>
              <li v-for="item in items"> 
                <p-checkbox
                  v-model="item.value"
                  :label="item.label"
                />
              </li>
            </ul>
        </div>
      `,
      data() {
        return {
          items: [
            {
              label: 'this is an item1',
              value: true,
            },
            {
              label: 'this is an item2',
              value: true,
            },
            {
              label: 'this is an item3',
              value: true,
            },
          ],
        };
      },
    };

    const wrapper = mount(Accordion, {
      slots: {
        default: checkboxHTML,
      },
      propsData: {
        items: [
          {
            label: 'this is an item1',
            value: true,
          },
          {
            label: 'this is an item2',
            value: true,
          },
          {
            label: 'this is an item3',
            value: true,
          },
        ],
      },
      stubs: {
        'p-checkbox': PCheckbox,
      },
    });
    await wrapper.setProps({ isCheckbox: true });
    expect(wrapper.html()).toContain('this is an item1');
    expect(wrapper.html()).toContain('this is an item2');
    expect(wrapper.html()).toContain('this is an item3');
  });

  it('check props: disabled', async () => {
    const accordionWrapper = wrapper.getComponent({ ref: 'accordion' });
    await wrapper.setProps({ disabled: false });
    expect(accordionWrapper.classes()).toContain('ph-opacity-100');
    await wrapper.setProps({ disabled: true });
    expect(accordionWrapper.classes()).toContain('ph-opacity-50');
  });

  it('check props: open', async () => {
    const accordionContent = wrapper.getComponent({ ref: 'accordionContent' });
    await wrapper.setProps({ open: false });
    expect(accordionContent.classes()).toContain('ph-display-none');
    await wrapper.setProps({ open: true });
    expect(accordionContent.classes()).not.toContain('ph-display-none');
  });
});
