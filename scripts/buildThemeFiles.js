// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { figmaTheme } = require('../dist/photon.common.js');

const { getBuiltThemeFiles } = figmaTheme;

const getFiles = () => {
  const path = resolve(__dirname, '../src/photon-token-poc/themes');
  return fs.readdirSync(path);
};

const buildThemeFiles = async () => {
  const files = getFiles();

  const mergedJson = files.reduce(
    (acc, file) => ({
      ...acc,
      [file]: JSON.parse(
        fs.readFileSync(
          resolve(__dirname, `../src/photon-token-poc/themes/${file}`)
        )
      ),
    }),
    {}
  );
  const themeFiles = await getBuiltThemeFiles(files, mergedJson);
  Object.keys(themeFiles).forEach(key => {
    fs.writeFileSync(
      resolve(__dirname, `../themes/${key}.json`),
      JSON.stringify(themeFiles[key]),
      'utf8'
    );
  });
};

buildThemeFiles();
