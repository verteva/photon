import { parseFigmaJson, flattenObjectToCssVars } from '../parseFigmaTheme';
import rawTheme from './rawTheme.json';
import rawErrorTheme from './rawErrorTheme.json';
import rawSourceTheme from './rawSourceTheme.json';
import rawSemanticTheme from './rawSemanticTheme.json';

describe('figmaTheme/parseFigmaTheme', () => {
  it('parses a figma theme', () => {
    const result = parseFigmaJson({
      sourceTheme: rawTheme,
      semanticTheme: rawTheme,
    });
    expect(result).toMatchSnapshot();
  });

  it('parses a figma theme from a semantic and source file', () => {
    const result = parseFigmaJson({
      sourceTheme: rawSourceTheme,
      semanticTheme: rawSemanticTheme,
    });
    expect(result).toMatchSnapshot();
  });

  describe('errors', () => {
    it('throws when the them file format is wrong', () => {
      expect(() =>
        parseFigmaJson({
          sourceTheme: rawErrorTheme,
          semanticTheme: rawErrorTheme,
        })
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('figmaTheme/flattenObjectToCssVars', () => {
  it('parses a figma theme and then flattens it', () => {
    const result = parseFigmaJson({
      sourceTheme: rawTheme,
      semanticTheme: rawTheme,
    });
    const cssResult = flattenObjectToCssVars(result);
    expect(cssResult).toMatchSnapshot();
  });
});
