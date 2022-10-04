import { replaceTemplateValue } from '../replaceTemplateValue';
import { Parser } from 'expr-eval';

const parser = new Parser();

export const mathParser = (value, root) => {
  const templateValue = replaceTemplateValue(value.value, root);

  return parser.evaluate(templateValue).toString();
};
