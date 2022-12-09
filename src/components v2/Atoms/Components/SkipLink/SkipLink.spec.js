import P2SkipLink from './SkipLink.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Atoms/SkipLink', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(P2SkipLink);
  });

  it('prop: mainMenuId', async () => {
    const navitem = wrapper.find('#ph-skip-link-navigation');
    await wrapper.setProps({
      mainMenuId: '#test-mainMenuId',
    });
    expect(navitem.attributes().href).toBe('#test-mainMenuId');
  });

  it('prop: contentId', async () => {
    const navitem = wrapper.find('#ph-skip-link-content');
    await wrapper.setProps({
      contentId: '#test-contentId',
    });
    expect(navitem.attributes().href).toBe('#test-contentId');
  });
});
