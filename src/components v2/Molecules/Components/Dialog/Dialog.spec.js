import P2Dialog from './Dialog.vue';
import { createWrapper } from '@/utils/unitTest';

describe('P2Dialog.vue', () => {
  let wrapper;
  let dialogEl;
  let confirmEl;
  let cancelEl;
  let cancelIcon;
  beforeEach(() => {
    wrapper = createWrapper(P2Dialog);
    dialogEl = wrapper.findComponent({
      ref: 'dialog',
    });
    confirmEl = wrapper.findComponent({
      ref: 'confirm',
    });
    cancelEl = wrapper.findComponent({
      ref: 'cancel',
    });
    cancelIcon = wrapper.findComponent({
      ref: 'cancelIcon',
    });
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
    expect(dialogEl.attributes().class).toContain('animate-fade-in');
    await confirmEl.trigger('click');
    expect(dialogEl.attributes().class).toContain('animate-fade-out');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('check dialog animation when click on cancel button', async () => {
    expect(dialogEl.attributes().class).toContain('animate-fade-in');
    await cancelEl.trigger('click');
    expect(dialogEl.attributes().class).toContain('animate-fade-out');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().cancel).toBeTruthy();
  });

  it('check dialog animation when click on cancel Icon', async () => {
    expect(dialogEl.attributes().class).toContain('animate-fade-in');
    await cancelIcon.trigger('click');
    expect(dialogEl.attributes().class).toContain('animate-fade-out');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().cancel).toBeTruthy();
  });
});
