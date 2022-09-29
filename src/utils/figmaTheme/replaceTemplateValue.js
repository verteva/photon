import parsers from './parsers';
import { resolveTemplateString } from './resolveTemplateString';

export const replaceTemplateValue = (templateValue, root) => {
  if (typeof templateValue === 'string') {
    return resolveTemplateString(templateValue, root);
  }
  if (typeof templateValue === 'object') {
    if (templateValue.type) {
      const resolver = parsers[templateValue.type];
      return resolver(templateValue, root);
    }
  }
};
