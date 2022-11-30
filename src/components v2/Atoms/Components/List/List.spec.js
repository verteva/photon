import List from './List.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Atoms/List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(List);
  });

  it('prop: list style circle', async () => {
    const listElem = wrapper.find('.ph-list');

    await wrapper.setProps({
      listType: 'circle',
    });
    expect(listElem.classes()).toContain('ph-list-type-circle');
  });

  it('prop: list style decimal', async () => {
    const listElem = wrapper.find('.ph-list');
    await wrapper.setProps({
      listStyle: 'decimal',
    });
    expect(listElem.classes()).toContain('ph-list-type-decimal');
  });

  it('prop: list type ol', async () => {
    const listElem = wrapper.find('.ph-list');
    await wrapper.setProps({
      type: 'ol',
    });
    expect(listElem.html()).toContain('<ol');
  });

  it('prop: list type ul', async () => {
    const listElem = wrapper.find('.ph-list');
    await wrapper.setProps({
      type: 'ul',
    });
    expect(listElem.html()).toContain('<ul');
  });
});
