import { replaceTemplateValue } from '../replaceTemplateValue';

export const compositionParser = (composition, root) => {
  if (typeof composition.value === 'string') {
    return replaceTemplateValue(composition.value, root);
  }
  return Object.entries(composition.value).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: replaceTemplateValue(value, root),
    }),
    {}
  );
};
