import { render } from '@testing-library/vue';
import AccordionContent from './AccordionContent.vue';

describe('AccordionContent.vue', () => {
  it('default render', async () => {
    const { findAllByTestId } = render(AccordionContent);

    const rule = findAllByTestId('accordion-header-rule');

    expect(rule.length).toBeFalsy();
  });

  it('props: noHeadingRule = true', async () => {
    const noHeadingRule = true;
    const { findAllByTestId } = render(AccordionContent, {
      props: {
        noHeadingRule,
      },
    });

    const rule = findAllByTestId('accordion-header-rule');

    expect(rule.length).toBeFalsy();
  });

  it('props: noHeadingRule = false', async () => {
    const noHeadingRule = false;
    const { findByTestId } = render(AccordionContent, {
      props: {
        noHeadingRule,
      },
    });
    const rule = findByTestId('accordion-header-rule');

    expect(rule).toBeTruthy();
  });

  it('props: Slot item', async () => {
    const noHeadingRule = false;

    const { getByText } = render(AccordionContent, {
      props: {
        noHeadingRule,
      },
      slots: {
        default: '<div>slot</div>',
      },
    });
    const slotItem = getByText('slot');

    expect(slotItem).toBeTruthy();
  });
});
