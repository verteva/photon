import { replaceTemplateValue } from '../replaceTemplateValue';

export const boxShadowParser = (value, root) => {
  if (typeof value.value === 'string') {
    return replaceTemplateValue(value.value, root);
  }
  const mappedStrings = value.value.map(
    ({ blur, color, spread, type, x, y }) =>
      `${replaceTemplateValue(x, root)}px ${replaceTemplateValue(
        y,
        root
      )}px ${replaceTemplateValue(blur, root)}px ${replaceTemplateValue(
        spread,
        root
      )}px ${replaceTemplateValue(color, root)}`
  );
  return `${mappedStrings.join(', ')}`;
};
