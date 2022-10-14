import { replaceTemplateValue } from '../replaceTemplateValue';
import { parseToRgba } from 'color2k';

export const colorParser = (value, root) => {
  const templateValue = replaceTemplateValue(value.value, root);

  return transformHEXRGBa(templateValue);
};

const transformHEXRGBa = value => {
  if (value.startsWith('rgba(#')) {
    const [hex, alpha] = value
      .replace(')', '')
      .split('rgba(')
      .pop()
      .split(', ');
    const [r, g, b] = parseToRgba(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return value;
  }
};
