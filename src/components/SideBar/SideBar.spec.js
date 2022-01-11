import SideBar from '@/components/SideBar/SideBar.vue';
import { createWrapper, assertStyleVarSetup } from '@/utils/unitTest';

describe('SideBar.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(SideBar);
  });

  it('check width variable is setup', async () => {
    const width = '414px';
    await wrapper.setProps({ width });
    assertStyleVarSetup(wrapper, 'sideBar', 'width', width);
  });

  it('check height variable is setup', async () => {
    const height = '100%';
    await wrapper.setProps({ height });
    assertStyleVarSetup(wrapper, 'sideBar', 'height', height);
  });

  it('check props:app is setup correctly', async () => {
    const app = true;
    await wrapper.setProps({ app });
    assertStyleVarSetup(wrapper, 'sideBar', 'position', 'fixed');
    assertStyleVarSetup(wrapper, 'sideBar', 'zIndex', '6');
  });
});
