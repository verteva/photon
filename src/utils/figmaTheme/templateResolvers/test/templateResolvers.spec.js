import { replaceTemplateValue } from '../replaceTemplateValue';

import {
  basicRoots,
  compositonRoots,
  colorRoot,
  boxShadowRoot,
  brokenRoot,
} from './themeRoots';

describe('figmaTheme/templateResolvers/', () => {
  // run the same test for all basic parsers.
  Object.keys(basicRoots).forEach(rootName => {
    const keyName = rootName.replace('Root', '');
    const root = basicRoots[rootName];
    describe(`basic parser - ${keyName}`, () => {
      it('parses a terminating value', () => {
        const result = replaceTemplateValue(root[keyName].primary, root);

        expect(result).toEqual(root[keyName].primary.value);
      });

      it('parses a template string', () => {
        const result = replaceTemplateValue(root[keyName].secondary, root);

        expect(result).toEqual(root[keyName].primary.value);
      });
    });
  });

  describe('basic parser - nested values', () => {
    it('parses a nested template string', () => {
      const result = replaceTemplateValue(colorRoot.color.tertiary, colorRoot);

      expect(result).toEqual('#000000 50% #000000 50%');
    });
  });

  Object.keys(compositonRoots).forEach(rootName => {
    const keyName = rootName.replace('Root', '');
    const root = compositonRoots[rootName];
    describe(`compositionParser - ${keyName}`, () => {
      it('parses a terminating value', () => {
        const result = replaceTemplateValue(root[keyName].primary, root);

        expect(result).toEqual(root[keyName].primary.value);
      });

      it('parses a string template value', () => {
        const result = replaceTemplateValue(root[keyName].secondary, root);
        expect(result).toEqual(root[keyName].primary.value);
      });

      it('parses a nested template value', () => {
        const result = replaceTemplateValue(root[keyName].tertiary, root);

        expect(result).toEqual(root[keyName].primary.value);
      });

      it('parses a nested template with templated strings', () => {
        const result = replaceTemplateValue(root[keyName].danger, root);

        expect(result).toEqual(root[keyName].primary.value);
      });
    });
  });

  describe('boxShadowParser', () => {
    const root = { ...colorRoot, ...boxShadowRoot };
    it('parses a terminating value', () => {
      const result = replaceTemplateValue(root.boxShadow.primary, root);

      expect(result).toEqual('0px 0px 0px 0px #000000');
    });

    it('parses a string template value', () => {
      const result = replaceTemplateValue(root.boxShadow.secondary, root);

      expect(result).toEqual('0px 0px 0px 0px #000000');
    });

    it('parses a nested template value', () => {
      const result = replaceTemplateValue(root.boxShadow.tertiary, root);

      expect(result).toEqual('0px 0px 0px 0px #000000');
    });

    it('parses a nested template with templated strings', () => {
      const result = replaceTemplateValue(root.boxShadow.danger, root);

      expect(result).toEqual('0px 0px 0px 0px #000000');
    });
  });

  describe('errors', () => {
    it('Throws an error when trying to parse objects into strings', () => {
      expect(() =>
        replaceTemplateValue(brokenRoot.other.primary, brokenRoot)
      ).toThrowErrorMatchingSnapshot();
    });

    it('logs an error when trying to parse objects that do not exist', () => {
      jest.spyOn(console, 'error').mockImplementation();

      replaceTemplateValue(brokenRoot.other.secondary, brokenRoot);

      // assert the expected warning
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('value is empty for match')
      );
    });

    it('Throws an error when trying to parse an object without a type key', () => {
      expect(() =>
        replaceTemplateValue(brokenRoot.other.tertiary, brokenRoot)
      ).toThrowErrorMatchingSnapshot();
    });

    it("Throws an error when trying to parse an key that's not a string nor object", () => {
      expect(() =>
        replaceTemplateValue(brokenRoot.other.quaternary, brokenRoot)
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
