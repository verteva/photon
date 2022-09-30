import { replaceTemplateValue } from '../templateResolvers';

export const parseFigmaJson = jsonFile => {
  return parseObject(jsonFile, jsonFile);
};

export const parseObject = (object, root) => {
  const parsedObject = {};

  Object.keys(object).forEach(key => {
    if (typeof object[key] !== 'object') {
      throw new Error(
        'Invalid template. Cannot parse non-object values. Objects must either have nested objects or terminate with an object with a valid type property.'
      );
    }
    if (object[key].type) {
      parsedObject[key] = replaceTemplateValue(object[key], root);
      return;
    }

    parsedObject[key] = parseObject(object[key], root);
  });

  return parsedObject;
};

export const flattenObjectToCssVars = (
  object,
  base = '--',
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
