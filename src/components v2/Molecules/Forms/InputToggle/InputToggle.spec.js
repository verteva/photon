import { fireEvent, render } from '@testing-library/vue';
import InputToggle from './InputToggle.vue';

describe('InputToggle.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputToggle, {
      props: {
        label,
      },
    });

    const container = getByText(label);

    expect(container).toBeTruthy();
  });

  it('props: inlineText', async () => {
    const label = 'This is a label';
    const inlineText = 'This is an inlineText';
    const { getByText } = render(InputToggle, {
      props: {
        inlineText,
        label,
      },
    });

    const container = getByText(inlineText);

    expect(container).toBeTruthy();
  });

  it('props: isRequired', async () => {
    const label = 'This is a label';
    const isRequired = true;
    const { getByText } = render(InputToggle, {
      props: {
        isRequired,
        label,
      },
    });

    const container = getByText('*');

    expect(container).toBeTruthy();
  });

  it('props: extraMessage', async () => {
    const extraMessage = 'This is an extra message';
    const { getByText } = render(InputToggle, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputToggle, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('emits: input', async () => {
    const { getByTestId, emitted } = render(InputToggle, {
      props: {},
    });

    const container = getByTestId('toggle');

    await fireEvent.click(container);

    expect(emitted().input).toEqual([[true]]);
  });
});
