import { replaceTemplateValue } from '../replaceTemplateValue';

export const spacingParser = (value, root) => {
  const replacedValue = replaceTemplateValue(value.value, root);
  if (replacedValue.includes('px')) {
    return replacedValue;
  }
  return `${replacedValue}px`;
};
