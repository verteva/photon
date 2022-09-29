import parsers from './parsers';
import { resolveTemplateString } from './resolveTemplateString';

export const replaceTemplateValue = (templateValue, root) => {
  if (typeof templateValue !== 'string' && typeof templateValue !== 'object') {
    throw new Error(
      'Invalid template value, must be a string or an object with a type property'
    );
  }
  if (typeof templateValue === 'object' && !templateValue.type) {
    throw new Error(
      'Invalid template value, cant parse objects without a type'
    );
  }
  if (typeof templateValue === 'string') {
    return resolveTemplateString(templateValue, root);
  }
  const resolver = parsers[templateValue.type];
  return resolver(templateValue, root);
};
