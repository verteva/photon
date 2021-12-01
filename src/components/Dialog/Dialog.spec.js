import Dialog from '@/components/Dialog/Dialog.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Dialog.vue', () => {
  let wrapper;
  let dialogEl;
  let headingEl;
  let confirmEl;
  let cancelEl;
  beforeEach(() => {
    wrapper = createWrapper(Dialog);
    dialogEl = wrapper.findComponent({
      ref: 'dialog',
    });
    headingEl = wrapper.findComponent({
      ref: 'heading',
    });
    confirmEl = wrapper.findComponent({
      ref: 'confirm',
    });
    cancelEl = wrapper.findComponent({
      ref: 'cancel',
    });
  });

  it('check prop heading', async () => {
    const heading = 'Heading';
    expect(headingEl.text()).toBe('');
    await wrapper.setProps({ heading });
    expect(headingEl.text()).toBe(heading);
  });

  it('check prop confirmLable', async () => {
    const confirmLabel = 'Confirm';
    expect(confirmEl.text()).toContain('Yes');
    await wrapper.setProps({ confirmLabel });
    expect(confirmEl.text()).toContain(confirmLabel);
  });

  it('check prop cancelLable', async () => {
    const cancelLabel = 'Cancel Button';
    expect(cancelEl.text()).toContain('Cancel');
    await wrapper.setProps({ cancelLabel });
    expect(cancelEl.text()).toContain(cancelLabel);
  });

  it('check prop singleButton', async () => {
    const singleButton = true;
    expect(cancelEl.exists()).toBeTruthy();
    await wrapper.setProps({ singleButton });
    expect(cancelEl.exists()).toBeFalsy();
  });
});
