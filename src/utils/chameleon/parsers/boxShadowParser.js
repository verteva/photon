import { replaceTemplateValue } from '../replaceTemplateValue';

export const boxShadowParser = (value, root) => {
  if (typeof value.value === 'string') {
    return replaceTemplateValue(value.value, root);
  }
  const mappedStrings = value.value.map(
    ({ blur, color, spread, type, x, y }) =>
      `${replaceTemplateValue(x, root)} ${replaceTemplateValue(
        y,
        root
      )} ${replaceTemplateValue(blur, root)} ${replaceTemplateValue(
        spread,
        root
      )} ${replaceTemplateValue(color, root)}`
  );
  return `${mappedStrings.join(', ')}`;
};
