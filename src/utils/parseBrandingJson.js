import get from 'lodash.get';

export const parseBrandingJson = jsonFile => {
  return parseObject(jsonFile, jsonFile);
};

export const replaceTemplateValue = (templateString, root) => {
  if (typeof templateString !== 'string') {
    return templateString;
  }
  const matches = templateString.match(/({{)(.*?)(}})/g);

  if (!matches || !matches.length) {
    return templateString;
  }

  let returnString = templateString;

  matches.forEach(match => {
    const strippedMatch = match.replace('{{', '').replace('}}', '');
    const value = get(root, strippedMatch, '');
    returnString = returnString.replace(
      match,
      replaceTemplateValue(value, root)
    );
  });

  return returnString;
};

export const parseObject = (object, root) => {
  const parsedObject = {};

  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') {
      parsedObject[key] = parseObject(object[key], root);
    } else {
      if (typeof object[key] === 'string') {
        parsedObject[key] = replaceTemplateValue(object[key], root);
      } else {
        parsedObject[key] = object[key];
      }
    }
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
