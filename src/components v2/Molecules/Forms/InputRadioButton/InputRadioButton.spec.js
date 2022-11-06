import { render } from '@testing-library/vue';
import InputRadioButton from './InputRadioButton.vue';

describe('InputCheckbox.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputRadioButton, {
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
    const { getByText } = render(InputRadioButton, {
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
    const { getByText } = render(InputRadioButton, {
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
    const { getByText } = render(InputRadioButton, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputRadioButton, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('props: radioButtonLabel', async () => {
    const radioButtonLabel = 'This is the checkbox label';
    const { getByText } = render(InputRadioButton, {
      props: {
        radioButtonLabel,
      },
    });

    const container = getByText(radioButtonLabel);

    expect(container).toBeTruthy();
  });
});
