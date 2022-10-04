import { parseFigmaJson, flattenObjectToCssVars } from '../parseFigmaTheme';
import rawTheme from './rawTheme.json';
import rawErroTheme from './rawErrorTheme.json';

describe('figmaTheme/parseFigmaTheme', () => {
  it('parses a figma theme', () => {
    const result = parseFigmaJson(rawTheme);
    expect(result).toMatchSnapshot();
  });

  describe('errors', () => {
    it('throws when the them file format is wrong', () => {
      expect(() => parseFigmaJson(rawErroTheme)).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('figmaTheme/flattenObjectToCssVars', () => {
  it('parses a figma theme and then flattens it', () => {
    const result = parseFigmaJson(rawTheme);
    const cssResult = flattenObjectToCssVars(result);
    expect(cssResult).toMatchSnapshot();
  });
});
