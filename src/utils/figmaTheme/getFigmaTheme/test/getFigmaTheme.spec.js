import { getFigmaTheme, getFigmaThemeNames } from '../getFigmaTheme';
import {
  correctFiles,
  correctNestedFiles,
  brokenFilesNoTheme,
  brokenFilesNoMeta,
  brokenFilesIncorectTokens,
} from '../../mockThemeFiles/testFileObjects';

const createFileObject = (files) => {
  const keys = Object.keys(files);

  const fileObject = function (key) {
    return files[key];
  };

  fileObject.keys = function () {
    return keys;
  };

  return fileObject;
};

describe('figmaTheme/getFigmaTheme', () => {
  it('gets a figma theme from a files object', () => {
    const result = getFigmaTheme(createFileObject(correctFiles), 'theme1');
    expect(result.semanticTheme).toMatchSnapshot();
    expect(result.sourceTheme).toMatchSnapshot();
  });

  it('gets a second figma theme from a files object', () => {
    const result = getFigmaTheme(createFileObject(correctFiles), 'theme2');
    expect(result.semanticTheme).toMatchSnapshot();
    expect(result.sourceTheme).toMatchSnapshot();
  });

  it('gets a figma theme from a files object with folders', () => {
    const result = getFigmaTheme(
      createFileObject(correctNestedFiles),
      'theme1'
    );
    expect(result.semanticTheme).toMatchSnapshot();
    expect(result.sourceTheme).toMatchSnapshot();
  });

  describe('errors', () => {
    it('throws when a $theme file cannot be found', () => {
      expect(() =>
        getFigmaTheme(createFileObject(brokenFilesNoTheme), 'theme1')
      ).toThrowErrorMatchingSnapshot();
    });

    it('throws when a $meta file cannot be found', () => {
      expect(() =>
        getFigmaTheme(createFileObject(brokenFilesNoMeta), 'theme1')
      ).toThrowErrorMatchingSnapshot();
    });

    it('throws when there is no theme data for supplied theme', () => {
      expect(() =>
        getFigmaTheme(createFileObject(correctFiles), 'theme4')
      ).toThrowErrorMatchingSnapshot();
    });

    it('throws when all partials are disabled for a theme', () => {
      expect(() =>
        getFigmaTheme(createFileObject(brokenFilesIncorectTokens), 'theme4')
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('figmaTheme/getFigmaThemeNames', () => {
  it('gets figma theme names from a files object', () => {
    const result = getFigmaThemeNames(createFileObject(correctFiles));
    expect(result).toMatchSnapshot();
  });

  describe('errors', () => {
    it('throws when a $theme file cannot be found', () => {
      expect(() =>
        getFigmaThemeNames(createFileObject(brokenFilesNoTheme))
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
