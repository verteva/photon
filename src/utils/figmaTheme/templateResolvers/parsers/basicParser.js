import { replaceTemplateValue } from '../replaceTemplateValue';

export const basicParser = (value, root) => {
  return replaceTemplateValue(value.value, root);
};
