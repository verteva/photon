import { getBuiltThemeFiles } from './buildThemeFiles';
import {
  correctFiles,
  correctNestedFiles,
  correctSourceFiles,
} from '../mockThemeFiles/testFileObjects';

describe('figmaTheme/buildThemeFiles', () => {
  it('builds theme files for themes', () => {
    const fileNames = Object.keys(correctFiles);
    const res = getBuiltThemeFiles(fileNames, correctFiles);
    expect(res).toMatchSnapshot();
  });

  it('builds theme files for nested themes', () => {
    const fileNames = Object.keys(correctNestedFiles);
    const res = getBuiltThemeFiles(fileNames, correctNestedFiles);
    expect(res).toMatchSnapshot();
  });

  it('builds theme files for source themes', () => {
    const fileNames = Object.keys(correctSourceFiles);
    const res = getBuiltThemeFiles(fileNames, correctSourceFiles);
    expect(res).toMatchSnapshot();
  });
});
