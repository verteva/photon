import { replaceTemplateValue } from './replaceTemplateValue';

export const parseBrandingJson = jsonFile => {
  return parseObject(jsonFile, jsonFile);
};

export const parseObject = (object, root) => {
  const parsedObject = {};

  Object.keys(object).forEach(key => {
    if (object[key].type) {
      parsedObject[key] = replaceTemplateValue(object[key], root);
      return;
    }
    if (typeof object[key] === 'object') {
      parsedObject[key] = parseObject(object[key], root);
      return;
    }
    parsedObject[key] = object[key];
  });

  return parsedObject;
};

export const flattenObjectToCssVars = (
  object,
  base = '--chameleon-',
  delimiter = '-'
) => {
  const flattenedObject = {};

  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') {
      Object.assign(
        flattenedObject,
        flattenObjectToCssVars(object[key], base + key + delimiter)
      );
    } else {
      flattenedObject[base + key] = object[key];
    }
  });

  return flattenedObject;
};
