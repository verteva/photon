import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion.vue';

describe('Accordion.vue', () => {
  it('default', async () => {
    const { container } = render(Accordion);

    expect(container).toBeTruthy();
  });

  it('opens the accordion when the header is clicked', async () => {
    const section = 'I am the section!';
    const slotText = 'I am now showing';
    const { getByText } = render(Accordion, {
      props: {
        section,
      },
      slots: {
        default: `<div>${slotText}</div>`,
      },
    });

    const header = getByText(section);
    const content = getByText(slotText);
    expect(content).not.toBeVisible();

    await userEvent.click(header);

    expect(content).toBeVisible();
  });

  it('closes the accordion when the header is clicked', async () => {
    const section = 'I am the section!';
    const slotText = 'I am now showing';
    const { getByText, getByTestId } = render(Accordion, {
      props: {
        section,
        open: true,
      },
      slots: {
        default: `<div>${slotText}</div>`,
      },
    });

    const header = getByText(section);
    const content = getByText(slotText);

    const accordion = getByTestId('ph-accordion');

    expect(content).toBeVisible();

    await userEvent.click(header);

    expect(accordion).toHaveAttribute('style', 'height: 0px;');
  });

  it('Accordion stays open when the header is clicked', async () => {
    const section = 'I am the section!';
    const slotText = 'I am now showing';
    const { getByText } = render(Accordion, {
      props: {
        section,
        stayOpen: true,
      },
      slots: {
        default: `<div>${slotText}</div>`,
      },
    });

    const header = getByText(section);
    const content = getByText(slotText);
    expect(content).toBeVisible();

    await userEvent.click(header);

    expect(content).toBeVisible();
  });

  it('Accordion opens when "open" prop gets updated', async () => {
    const slotText = 'I am now showing';
    const { getByText, updateProps } = render(Accordion, {
      props: {
        open: false,
      },
      slots: {
        default: `<div>${slotText}</div>`,
      },
    });

    const content = getByText(slotText);
    expect(content).not.toBeVisible();

    await updateProps({
      open: true,
    });

    const rerenderedContent = getByText(slotText);

    expect(rerenderedContent).toBeVisible();
  });
});
