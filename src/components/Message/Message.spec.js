import Message from '@/components/Message/Message.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Message.vue', () => {
  let wrapper;
  let button;
  let iconWrapper;
  beforeEach(() => {
    wrapper = createWrapper(Message);
    button = wrapper.getComponent({ ref: 'messageButton' });
    iconWrapper = wrapper.getComponent({ ref: 'ph-message' });
  });

  it('check prop: callToAction', async () => {
    const callToAction = 'click me!';

    await wrapper.setProps({ callToAction });

    expect(wrapper.props().callToAction).toEqual(callToAction);
  });

  it('check prop: title', async () => {
    const title = 'this is a title';

    await wrapper.setProps({ title });

    expect(wrapper.props().title).toEqual(title);
  });

  it('check prop: description', async () => {
    const description = 'this is a description';

    await wrapper.setProps({ description });

    expect(wrapper.props().description).toEqual(description);
  });

  it('check computed: type of message', async () => {
    expect(wrapper.props().type).toEqual('success');

    const type = 'warning';
    await wrapper.setProps({ type });
    expect(wrapper.props().type).toEqual(type);

    const computedIcon = wrapper.vm.typeStyle;
    const iconClasses = computedIcon.classes;
    const icontype = computedIcon.icon;

    expect(iconWrapper.classes()).toContain(iconClasses[0]);
    expect(iconWrapper.classes()).toContain(iconClasses[1]);
    expect(iconWrapper.text()).toContain(icontype);
  });

  it('emit event: button click, show button when description', async () => {
    expect(wrapper.emitted('click')).toBeFalsy();

    const description = 'show button';

    await wrapper.setProps({ description });
    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
