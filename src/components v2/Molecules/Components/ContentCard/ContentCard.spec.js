import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import ContentCard from './ContentCard';

const props = {
  active: true,
  disabled: true,
  isInteractive: true,
  allowOverflow: true,
  type: 'bordered',
};

describe('ContentCard.vue', () => {
  it('renders a component', () => {
    const { container } = render(ContentCard);
    expect(container).toMatchSnapshot();
  });

  Object.entries(props).forEach(([key, value]) => {
    it(`renders a component with props: ${key} with value ${value}`, () => {
      const { container } = render(ContentCard, {
        props: {
          [key]: value,
        },
      });
      expect(container).toMatchSnapshot();
    });
  });

  it('slots: renders default slot', () => {
    const slotText = 'I am text';
    const { getByText } = render(ContentCard, {
      slots: {
        default: slotText,
      },
    });

    const content = getByText(slotText);

    expect(content).toBeTruthy();
  });

  it('emits: click when pressed', async () => {
    const slotText = 'I am text';
    const { getByText, emitted } = render(ContentCard, {
      slots: {
        default: slotText,
      },
    });

    const content = getByText(slotText);

    await userEvent.click(content);

    expect(emitted().click).toBeTruthy();
  });
});
