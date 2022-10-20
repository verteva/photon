import {
  parseBrandingJson,
  flattenObjectToCssVars,
} from '../parseBrandingJson';
import rawTheme from './rawTheme.json';

describe('parseBrandingJson.js', () => {
  it('parses a branding theme', () => {
    const result = parseBrandingJson(rawTheme);
    expect(result).toMatchSnapshot();
  });
});

describe('flattenObjectToCssVars.js', () => {
  it('parses a figma theme and then flattens it', () => {
    const result = parseBrandingJson(rawTheme);
    const cssResult = flattenObjectToCssVars(result);
    expect(cssResult).toMatchSnapshot();
  });
});
