import { render, fireEvent } from '@testing-library/vue';
import InputNumber from './InputNumber.vue';

describe('Molecules/InputNumber.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputNumber, {
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
    const { getByText } = render(InputNumber, {
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
    const { getByText } = render(InputNumber, {
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
    const { getByText } = render(InputNumber, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputNumber, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('emits: input', async () => {
    const { getByTestId, emitted } = render(InputNumber, {
      props: {
        value: 0,
      },
    });

    const inputElement = await getByTestId('input-text');
    await fireEvent.update(inputElement, 5);
    expect(emitted().input).toEqual([['5']]);
  });

  it('emits: change:subtract', async () => {
    const { getByText, emitted } = render(InputNumber, {
      props: {
        value: 2,
      },
    });

    const inputElement = await getByText('-');
    await fireEvent.click(inputElement);
    expect(emitted()['change:subtract']).toEqual([[]]);
  });

  it('emits: change:add', async () => {
    const { getByText, emitted } = render(InputNumber, {
      props: {
        value: 0,
      },
    });

    const inputElement = await getByText('+');
    await fireEvent.click(inputElement);
    expect(emitted()['change:add']).toEqual([[]]);
  });
});
