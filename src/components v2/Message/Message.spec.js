import Message from '@/components v2/Message/Message.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Message.vue', () => {
  const onClick = jest.fn();
  const listeners = {
    click: onClick,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Message, {}, {}, {}, listeners);
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

    const computedIcon = wrapper.vm.icon;
    const iconType = computedIcon[type];
    const messageWrapper = wrapper.getComponent({ ref: 'messageIcon' });

    expect(messageWrapper.vm.name).toContain(iconType);
  });

  it('emit event: button click, show button when description', async () => {
    expect(wrapper.emitted('click')).toBeFalsy();

    const description = 'show button';
    const callToAction = 'click me!';

    await wrapper.setProps({ description });
    await wrapper.setProps({ callToAction });
    const button = wrapper.getComponent({ ref: 'messageButton' });
    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
