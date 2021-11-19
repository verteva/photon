import Card from '@/components/Card/Card.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Card.vue', () => {
  let wrapper;
  let cardFindClass;
  beforeEach(() => {
    wrapper = createWrapper(Card);
    cardFindClass = wrapper.findComponent({
      ref: 'card',
    });
  });

  it('check Card content', () => {
    const cardSlotContent = wrapper
      .getComponent({
        ref: 'card',
      })
      .html();
    expect(cardSlotContent).toContain('Slot Content');
  });

  it('check init displaying class', async () => {
    expect(cardFindClass.classes()).toContain('ph-rounded-lg');
    expect(cardFindClass.classes()).toContain('ph-relative');
    expect(cardFindClass.classes()).toContain('ph-overflow-hidden');
    expect(cardFindClass.classes()).toContain('ph-p-9');
  });

  it('check props: light displaying class', async () => {
    expect(cardFindClass.classes()).toContain('ph-bg-grey6');
    await wrapper.setProps({ light: true });
    expect(cardFindClass.classes()).toContain('ph-bg-white');
    expect(wrapper.vm.light).toEqual(true);
  });

  it('check props: shadow displaying class', async () => {
    expect(cardFindClass.classes()).toContain('ph-shadow-none');
    await wrapper.setProps({ shadow: true });
    expect(cardFindClass.classes()).toContain('ph-shadow');
    expect(wrapper.vm.shadow).toEqual(true);
  });
});
