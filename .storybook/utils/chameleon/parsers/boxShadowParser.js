import { replaceTemplateValue } from '../../parseChameleonTheme';

const boxShadowParser = (value, root) => {
  if (typeof value.value === 'string') {
    return replaceTemplateValue(value, root);
  }
  return boxShadowMapper(value, root);
};

export default boxShadowParser;

const boxShadowMapper = (value, root) => {
  const mappedStrings = value.map(
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
