import get from 'lodash.get';

export const parseBrandingJson = jsonFile => {
  return parseObject(jsonFile, jsonFile);
};

const boxShadowMapper = (value, root) => {
  const mappedStrings = value.value.map(
    ({ blur, color, spread, x, y }) =>
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

const compositionParser = (value, root) => {
  return parseObject(value.value, root);
};

const spacingParser = (value, root) => {
  console.log('SPACING PARSER', value);
  const replacedValue = replaceTemplateValue(value.value, root);
  console.log('SPACING PARSER REPLACED', replacedValue);
  if (replacedValue.includes('px')) {
    return replacedValue;
  }
  return `${replacedValue}px`;
};

const basicParser = (value, root) => {
  return replaceTemplateValue(value.value, root);
};

const typographyParser = (value, root) => {
  return Object.keys(value.value).map(typographyKey =>
    replaceTemplateValue(typographyKey, root)
  );
};

const parsers = {
  composition: compositionParser,
  color: basicParser,
  spacing: spacingParser,
  borderRadius: spacingParser,
  borderWidth: basicParser,
  fontFamilies: basicParser,
  fontWeights: basicParser,
  typography: typographyParser,
};

export const replaceTemplateValue = (
  templateString,
  root,
  openTag = '{',
  closeTag = '}',
  valueToken = ''
) => {
  console.log('templateString', templateString);
  if (typeof templateString === 'object') {
    if (templateString.type) {
      if (
        templateString.type === 'boxShadow' &&
        typeof templateString.value !== 'string'
      ) {
        return boxShadowMapper(templateString, root);
      }
      if (
        templateString.type === 'spacing' ||
        templateString.type === 'borderRadius'
      ) {
        const replacedValue = replaceTemplateValue(templateString.value, root);
        if (replacedValue.includes('px')) {
          return replacedValue;
        }
        return `${replacedValue}px`;
      }
      console.log('replacing for type', templateString);
      return replaceTemplateValue(templateString.value, root);
    }
  }
  try {
    const matches = templateString.match(/({)(.*?)(})/g);

    if (!matches || !matches.length) {
      return templateString;
    }

    let returnString = templateString;

    matches.forEach(match => {
      const strippedMatch = match.replace('{', '').replace('}', '');
      const value = get(root, `${strippedMatch}${valueToken}`, '');
      if (value.type === 'spacing') {
        console.log('value', value);
      }
      returnString = returnString.replace(
        match,
        replaceTemplateValue(value, root)
      );
    });

    return returnString;
  } catch (error) {
    console.error(
      `Can't match templatestring ${templateString} for root ${JSON.stringify(
        root
      )}`,
      error
    );
    return '';
  }
};

export const parseObject = (object, root) => {
  const parsedObject = {};

  Object.keys(object).forEach(key => {
    if (object[key].type) {
      parsedObject[key] = parsers[object[key].type](object[key], root);
      return;
    }
    if (typeof object[key] === 'string') {
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
