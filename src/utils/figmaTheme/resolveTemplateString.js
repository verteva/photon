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
