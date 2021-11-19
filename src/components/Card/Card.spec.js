import { mount, createLocalVue } from '@vue/test-utils';
import Card from '@/components/Card/Card.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(Card, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots: {
      default: 'Slot Content',
    },
  });
};
describe('Card.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('check Card content', () => {
    const cardSlotContent = wrapper.getComponent({
      ref: 'card',
    }).html();
    expect(cardSlotContent).toContain('Slot Content');
  });

  it('check init displaying class', async () => {
    const cardFindClass = await wrapper.getComponent({
      ref: 'card',
    });
    expect(cardFindClass.classes()).toContain('ph-rounded-lg');
    expect(cardFindClass.classes()).toContain('ph-relative');
    expect(cardFindClass.classes()).toContain('ph-overflow-hidden');
    expect(cardFindClass.classes()).toContain('ph-p-9');
  });

  it('check props: light displaying class', async () => {
    const cardFindClass = await wrapper.getComponent({
      ref: 'card',
    });
    expect(cardFindClass.classes()).toContain('ph-bg-grey6');
    await wrapper.setProps({ light: true });
    expect(cardFindClass.classes()).toContain('ph-bg-white');
    expect(wrapper.vm.light).toEqual(true);
  });

  it('check props: shadow displaying class', async () => {
    const cardFindClass = await wrapper.getComponent({
      ref: 'card',
    });
    expect(cardFindClass.classes()).toContain('ph-shadow-none');
    await wrapper.setProps({ shadow: true });
    expect(cardFindClass.classes()).toContain('ph-shadow');
    expect(wrapper.vm.shadow).toEqual(true);
  });
});
