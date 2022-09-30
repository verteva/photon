import get from 'lodash.get';
import { replaceTemplateValue } from './replaceTemplateValue';

export const resolveTemplateString = (
  templateString,
  root,
  openTag = '{',
  closeTag = '}',
  valueToken = ''
) => {
  try {
    const matches = templateString.match(/({)(.*?)(})/g);

    if (!matches || !matches.length) {
      return templateString;
    }

    let returnString = templateString;

    matches.forEach(match => {
      const strippedMatch = match.replace('{', '').replace('}', '');
      const value = get(root, `${strippedMatch}${valueToken}`, '');
      if (!value) {
        console.error(
          `value is empty for match ${strippedMatch}. Are you sure you are targeting the right value?`
        );
      }
      const resolvedValue = replaceTemplateValue(value, root);
      if (
        templateString.length !== match.length &&
        typeof resolvedValue === 'object'
      ) {
        throw new Error(
          `Template string is not valid. You tried to parse object value into a string. \n\n- templateString: ${templateString} \n\t- match: ${strippedMatch} \n\t- value: ${value}`
        );
      }
      if (templateString.length === match.length) {
        // for object substitution if the whole string is a single template string reference
        returnString = resolvedValue;
        return;
      }
      returnString = returnString.replace(match, resolvedValue);
    });

    return returnString;
  } catch (error) {
    console.error(
      `Can't match templatestring ${templateString} for root ${JSON.stringify(
        root
      )}`,
      error
    );
    throw new Error(error);
  }
};
