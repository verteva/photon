import { fireEvent, render } from '@testing-library/vue';
import InputCheckbox from './InputCheckbox.vue';

describe('InputCheckbox.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputCheckbox, {
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
    const { getByText } = render(InputCheckbox, {
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
    const { getByText } = render(InputCheckbox, {
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
    const { getByText } = render(InputCheckbox, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputCheckbox, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('props: checkboxLabel', async () => {
    const checkboxLabel = 'This is the checkbox label';
    const { getByText } = render(InputCheckbox, {
      props: {
        checkboxLabel,
      },
    });

    const container = getByText(checkboxLabel);

    expect(container).toBeTruthy();
  });

  it('emits: input', async () => {
    const checkboxLabel = 'This is the checkbox label';
    const { getByText, emitted } = render(InputCheckbox, {
      props: {
        checkboxLabel,
      },
    });

    const container = getByText(checkboxLabel);

    await fireEvent.click(container);

    expect(emitted().input).toEqual([[true]]);
  });
});
