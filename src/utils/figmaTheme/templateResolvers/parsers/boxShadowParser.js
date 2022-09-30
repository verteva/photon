import { replaceTemplateValue } from '../replaceTemplateValue';

export const boxShadowParser = (value, root) => {
  if (typeof value.value === 'string') {
    return replaceTemplateValue(value.value, root);
  }

  const buildShadow = ({ blur, color, spread, x, y }) =>
    `${replaceTemplateValue(x, root)}px ${replaceTemplateValue(
      y,
      root
    )}px ${replaceTemplateValue(blur, root)}px ${replaceTemplateValue(
      spread,
      root
    )}px ${replaceTemplateValue(color, root)}`;

  if (Array.isArray(value.value)) {
    const mappedStrings = value.value.map(buildShadow);
    return `${mappedStrings.join(', ')}`;
  }
  return buildShadow(value.value);
};
