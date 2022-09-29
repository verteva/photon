import { replaceTemplateValue } from '../replaceTemplateValue';

export const typographyParser = (typography, root) => {
  return Object.entries(typography.value).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: replaceTemplateValue(value, root),
    }),
    {}
  );
};
