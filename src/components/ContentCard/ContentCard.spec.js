import { mount, createLocalVue } from '@vue/test-utils';
import ContentCard from '@/components/contentCard/ContentCard.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(ContentCard, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots: {
      default: 'Slot Content',
    },
  });
};
describe('ContentCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('check slot content', () => {
    const contentCardSlotContent = wrapper.html();
    expect(contentCardSlotContent).toContain('Slot Content');
  });

  it('check props: active displaying class', async () => {
    const contentCardFindClass = await wrapper.getComponent({
      ref: 'contentCard',
    });
    expect(contentCardFindClass.classes()).toContain('ph-border-grey9');
    await wrapper.setProps({ active: true });
    expect(contentCardFindClass.classes()).toContain('ph-border-brand2');
    expect(wrapper.vm.active).toEqual(true);
  });

  it('check data: hover data change', async () => {
    const contentCardHoverTrigger = await wrapper.getComponent({
      ref: 'contentCard',
    });
    await expect(wrapper.vm.hover).toEqual(false);
    await contentCardHoverTrigger.trigger('mouseover');
    await expect(wrapper.vm.hover).toEqual(true);
  });

  it('check props: disabled/isInteractive/flex/allowOverflow/breakpoint is correct setup', () => {
    const disabled = false;
    const isInteractive = false;
    const flex = false;
    const allowOverflow = false;
    const breakpoint = false;

    wrapper.setProps({
      disabled,
      isInteractive,
      flex,
      allowOverflow,
      breakpoint,
    });

    expect(wrapper.vm.disabled).toEqual(false);
    expect(wrapper.vm.isInteractive).toEqual(false);
    expect(wrapper.vm.flex).toEqual(false);
    expect(wrapper.vm.allowOverflow).toEqual(false);
    expect(wrapper.vm.breakpoint).toEqual(false);
  });

  it('check props: padding displaying adding default ph-p-7', async () => {
    expect(wrapper.vm.padding).toEqual('ph-p-7');
    wrapper.setProps({ padding: 'ph-p-99' });
    const contentCardPaddingClass = await wrapper.getComponent({
      ref: 'contentCard',
    });
    expect(contentCardPaddingClass.html()).toContain('ph-p-99');
  });

  it('check props: interactive click event', async () => {
    await wrapper.setProps({ isInteractive: true });
    await wrapper.setProps({ disabled: false });
    const contentCardClickedState = await wrapper.getComponent({
      ref: 'contentCard',
    });
    await contentCardClickedState.trigger('click');
    expect(contentCardClickedState.classes()).toContain('ph-cursor-pointer');
  });
});
