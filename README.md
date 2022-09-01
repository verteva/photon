# photon

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies plugin for production
```
npm run build:lib

```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Publishing to npm
### Steps for publishing

1. Make sure you are logged into the nanonpm npm account.
```
npm login
```

2. Update the package version in the `package.json` file under the `version` field. We are using [semantic versioning](https://semver.org/).

3. Update the changelog file with the changes you have made.

4. Run the deploy command - this will run 2 commands synchronously:
 i) npm run build:lib (builds the project)
 ii) npm publish (published to npm)
```
npm run deploy
```

## Working in Photon 
### Creating new components
###### To create a new component and add to Photon & Storybook run:
`npm run new`

This will run a script prompting you for:
1) The name of the component in Camelcase 
_ie. MyNewComponent_
2) The section you would like _MyNewComponent_ to sit under in the Storybookleft menu 
_ie. Forms_

It will then create a Vue component, a .stories.js file, an indes.ts (for export) and a types.ts file. These files will be populated with the basic content to allow for quick and easy scaffolding of new components. Upon running this command you should see the new component hotreloaded into Storybook.


### Adding SVG Icons
When adding new SVG icons, you can use either of the following methods:
###### Method 1 - Manual (good for one off icons)
1) Drop the SVG into the Icons/icons/svg folder 
_ie. Icons/icons/svg/House.svg_
2) Create a Vue component file for the icon (use the exaxct same name)
_ie. Icons/icons/House.vue_
3) Add the SVG into the Vue component template
4) Update the Icon name list export in _Icons/icons/index.ts_ to have that icon name (this is used to output the icon in Storybook and for icon name validation).

###### Method 2 - Automated (WARNING - Pro level - use at your own risk!)
1) Drop the SVG into the Icons/icons/svg folder
2) Ensure the SVG only has the `<svg>...</svg>` as the top level node. Remove andy `<xml ...>` node
3) Run `npm run ico`
4) Look for any output errors in terminal - if there's a file name with a space, or the xml tag remains in the SVG file it won't compile properly.
5) You can now add "Full Stack Developer" to your resume ;)

### Photon v2 components.

Photon v2 components are a new system of styling photon components. 

In order to get the theme files to load you need to create a loader that pulls in all the theme files.

run the following command
```typescript
cp themeLoader.sample.js themeLoader.js
```
Open the new `themeLoader.js` file and replace the `<PATH_TO_BRANDING_FOLDER>` with the absolute path to your branding folder for `onboarding`

Make sure it does not have a trailing slash `/` at the end.

When you next start the storybook application it will load and pick the theme files from your theme folders.

To learn more about the photon v2 system check the documentation bellow
[creating photon v2 components](https://verteva.atlassian.net/wiki/spaces/ENG/pages/1613594659/Creating+Photon+v2+components)





