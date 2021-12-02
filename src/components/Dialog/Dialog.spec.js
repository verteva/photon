import Dialog from '@/components/Dialog/Dialog.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Dialog.vue', () => {
  let wrapper;
  let dialogEl;
  let headingEl;
  let confirmEl;
  let cancelEl;
  let cancelIcon;
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
    cancelIcon = wrapper.findComponent({
      ref: 'cancelIcon',
    })
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

  it('check dialog animation when click on confirm button', async () => {
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeIn');
    await confirmEl.trigger('click');
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeOut');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('check dialog animation when click on cancel button', async () => {
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeIn');
    await cancelEl.trigger('click');
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeOut');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().cancel).toBeTruthy();
  });

  it('check dialog animation when click on cancel Icon', async () => {
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeIn');
    await cancelIcon.trigger('click');
    expect(dialogEl.attributes().class).toContain('ph-animate-fadeOut');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().cancel).toBeTruthy();
  });
});
