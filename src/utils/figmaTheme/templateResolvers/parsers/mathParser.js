import { replaceTemplateValue } from '../replaceTemplateValue';
import { Parser } from 'expr-eval';

const parser = new Parser();

export const mathParser = (value, root) => {
  const templateValue = replaceTemplateValue(value.value, root);

  try {
    return parser.evaluate(templateValue).toString();
  } catch {
    // Can't evaluate the maths expression. Returning value directly.
    return templateValue;
  }
};
