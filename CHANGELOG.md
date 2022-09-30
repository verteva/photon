## [0.3.2](https://github.com/verteva/photon/compare/v0.3.1...v0.3.2) (2022-09-20)


### Bug Fixes

* fixed build for storybook build ([dc68b15](https://github.com/verteva/photon/commit/dc68b15d0a14bb22a4dc685170328283e22ae996))
* use user token for release-pr so that actions run ([334006b](https://github.com/verteva/photon/commit/334006b175dbe9cbba9cb0e268ab08e809422f54))

## [0.3.1](https://github.com/verteva/photon/compare/v0.3.0...v0.3.1) (2022-09-16)


### Bug Fixes

* changed to git-pr for semantic release ([d7e10dd](https://github.com/verteva/photon/commit/d7e10dd4da8d2b8180ca17373cf88858265e8ca8))
* themelocation fix ([bcd14c4](https://github.com/verteva/photon/commit/bcd14c40dd5efba733986b952dfd66abecb08c9f))

# [0.3.0](https://github.com/verteva/photon/compare/v0.2.2...v0.3.0) (2022-09-16)


### Bug Fixes

* updated semantic release commit message ([e0717ae](https://github.com/verteva/photon/commit/e0717aeaa5ae5371fd708eb9aa981d5cc12231d4))


### Features

* semantic versioning ([f18fd53](https://github.com/verteva/photon/commit/f18fd5322860e8e990aee8ad7950151b3d531bf0))

## ---- End of manual changelogs ----

## [0.2.2] - 2022-03-13
### Fix
- Fix previous broken release

## [0.2.1] - 2022-03-13
### Fix
- Simplified the template parser for safari and added error handling.
### Add
- Added the Input component to v2
- Added the InputNumber component to v2
- Added the Label component to v2

## [0.2.0] - 2022-08-01
### Major update
- Introducing v2 components.
  - V2 button added.
  - V2 theming helper functions added
  - Theme switcher added inside storybook for v2 components.

## [0.1.655] - 2022-07-22
### Fix
- Fixed the `Accordion` component to allow the disabling of the box-shadows.
- Fixed the `InputBasicSelect` to always pop out the select dropdowns and append it to `<body />`.


## [0.1.654] - 2022-07-18
### Fix
- When `unstyled` is selected for the `Accordion` it no longer adds padding to the content. You can supply padding by adding it to the component you add into the default slot
- Added missing properties to the `InputBasicSelect` to allow it to only return a value if an object is provided as the item value.

## [0.1.653] - 2022-07-16
### Add
- Add new Input Basic Select component

## [0.1.652] - 2022-06-22
### Add
- Add Tab to an allowed keypress

## [0.1.651] - 2022-05-24
### Fix
- Add fix for input key code management (OK-3177)

## [0.1.650] - 2022-05-04
### Add
- Add a slot for the title

## [0.1.649] - 2022-05-02
### Add
- Add enterkey into isNumber() to return false

## [0.1.648] - 2022-04-28
### Add
- Add icon colours in accordions to be configured

## [0.1.647] - 2022-04-27
### Add
- Add configurable icon colour

## [0.1.646] - 2022-04-04
### Add
- Add disabled prop to phone input

## [0.1.645] - 2022-03-29
### Fixed
- Fixed icon name typo

## [0.1.644] - 2022-03-17
### Fixed
- Fixed InputPhone component innerValue

## [0.1.643] - 2022-03-16
### Add
- Add the Figures component

## [0.1.642] - 2022-03-14
### Add
- Add a delay user can configure to autoclose
- Improve alignment

## [0.1.641] - 2022-03-04
### Fix
- Fix RadioGroup button alignment

## [0.1.640] - 2022-02-24
## [0.1.639] - 2022-02-23
### Fix
- Autocomplete input field webkit-appearance for input field
## [0.1.638] - 2022-01-27

## [0.1.638] - 2022-01-27
### Fix
- Add simple flag to Autocomplete for back competibility

## [Unreleased]
## [0.1.637] - 2022-01-27
## [0.1.636] - 2022-01-24
### Fix
- Add selectedObj to Autocomplete

## [0.1.635] - 2022-01-13
### Fix
- InputPhone is have an extra empty label cause of conditional 

## [0.1.634] - 2022-01-12
### Add
- SideBar Component

## [0.1.633] - 2022-01-11
### Fix
- InfoCard remove red background of splitter

## [0.1.634] - 2021-12-21
### Fix
- Added Vuex to Toast Component
- Toast & Message unit tests

## [0.1.632] - 2022-01-07
### Fix
- InputText turn off autocomplete

## [0.1.631] - 2021-12-13
### Fix
- InputRadio reaction issues

## [0.1.630] - 2021-12-13
### Add
- Dialog Testing
- InfoCard unit testing
- BrandGradientText unit testing
- Dialog unit testing
- Add configurable border for InfoCard
- Radio buttons unit testing
- DateInput unit testing
- Add Rate component unit testing
- InputPhone unit testing
 
## [0.1.629] - 2021-11-30
### Add
- Checkbox unit testing

## [0.1.628] - 2021-11-29
### Fix
- Prevent default on input field to handle numbers
- Remove unused code in InputNumber component

## [0.1.627] - 2021-11-26
### Add
- Add ID suffix to Checkbox group to support multiple sets of checkbox groups

## [0.1.626] - 2021-11-26
### Add
- Add a noPadding and rounded property to Card

## [0.1.625] - 2021-11-26
### Add
- Prevent value change on number input field input-number component

## [0.1.624] - 2021-11-25
### Add
- fix duplicated icons in autocomplete address

## [0.1.623] - 2021-11-24
### Add
- Add a disabled flag for input text

## [0.1.622] - 2021-11-24
### Fix
- Fix CheckboxGroup being able to handle null v-model on init

## [0.1.621] - 2021-11-24
### Fix
- Fix CheckboxGroup component to use array for v-model

## [0.1.620] - 2021-11-24
### Add
- Add CheckboxGroup component

## [0.1.619] - 2021-11-23
### Add
- Add slot to p-message component

## [0.1.618] - 2021-11-22
### Fix
- Fix duplicated icons in autocomplete when selected

## [0.1.617] - 2021-11-18
### Add
- Radio buttons with icons 

## [0.1.616] - 2021-11-19
### fix
- font-family for inputPhone component

## [0.1.615] - 2021-11-18
### Add
- Add slot to the Dialog component for supplemental text

## [0.1.614] - 2021-11-17
### Add
- Add support for rich content on Radio label

## [0.1.613] - 2021-11-16
### Fix
- Reduce input error icon size

## [0.1.612] - 2021-11-09
### Fix
- Remove comma from icon index

## [0.1.611] - 2021-11-09
### Add
- Switch toggle component

## [0.1.610] - 2021-11-08
### Fix
- Radio button not working when selecting false value on init

## [0.1.609] - 2021-11-04
### Add
- Add support for rich content on Checkbox label

## [0.1.608] - 2021-11-03
### Add
- Add TimeoutGradient icon

## [0.1.607] - 2021-11-02
### Fix
- Added optional focus border style for Checkbox

## [0.1.606] - 2021-11-01
### Fix
- Radio buttons not working in Safari
- Scope checkbox postcss to component

## [0.1.605] - 2021-11-01
- Added new icons, DocTypeWord, DocTypePDF, CheckparticleGradient

## [0.1.604] - 2021-11-01
## [0.1.603] - 2021-11-01
- Added InProgressGradient icon

## [0.1.602] - 2021-10-29
## [0.1.601] - 2021-10-29
### Add
- Added Approval icon

## [0.1.600] - 2021-10-28
### Add
- Add switch toggle component
- Add ContentCard component
- Add Badge component
- Add Input number component

## [0.1.599] - 2021-10-26
### Add
- Fix Autocomplete magins

## [0.1.598] - 2021-10-21
### Add
- Add Play and Triangle icons
- Add eslint and prettier config

## [0.1.597] - 2021-10-21
### Add
- Add Progress Circular

## [0.1.596] - 2021-10-15
### Add
- Add Skeleton Loader

## [0.1.595] - 2021-10-14
### Fix
- Radio button reactivity fix

## [0.1.594] - 2021-10-14
### Fix
- Fix checkbox vertical aligment on firefox broweser

## [0.1.593] - 2021-10-13
### Fix
- Publish new version as p-from did not build previously

## [0.1.592] - 2021-10-12
- Add Form component
- Add enhancements to the radio button comp

## [0.1.591] - 2021-10-11
- Add radio buttons and fix for alignment in errors

## [0.1.590] - 2021-10-05
- Make phont input show a dark bg

## [0.1.589] - 2021-10-05
- Remove log

## [0.1.588] - 2021-10-05
- Add Input Phone Component

## [0.1.587] - 2021-10-05
- Fix InfoCard's colour and gradients


## [0.1.586] - 2021-10-01
## [0.1.585] - 2021-10-01
### Added
- New SVG for gradient backgrounds

## [0.1.583] - 2021-09-30
### Added
- Resolve Checkbox dark border and font size

## [0.1.582] - 2021-09-30
### Added
- Added BrandGradientText and InfoCard

## [0.1.581] - 2021-09-29
### Added
- Button component Safari enhancement
- Change input error display
- Added List/List item component

## [0.1.580] - 2021-09-27
### Added
- Remove Checkbox focus color, add cursor

## [0.1.579] - 2021-09-24
## [0.1.578] - 2021-09-24
### Added
- Added the Toast component

## [0.1.577] - 2021-09-22
### Added
- Added the Message component

## [0.1.576] - 2021-09-21
### Fix
- remove input text color on focus

## [0.1.575] - 2021-09-21
### Fix
- Update cross.svg to use currentColor

## [0.1.574] - 2021-09-17
### Added
- Allow Date input to support dark mode

## [0.1.573] - 2021-09-16
### Added
- Add Checkbox, Date input, updates to Autocomplete and InpuTtext

## [0.1.572] - 2021-09-10
### Added
- Hofix for label slot & prop in text input not displaying correctly

## [0.1.571] - 2021-09-10
### Added
- Add Autocomplte Filter control for different components

## [0.1.570] - 2021-09-09
### Added
- Fixing AddressAutocomplete filtered options and searching opacity

## [0.1.569] - 2021-09-08
### Added
- Give Accordion a footer slot

## [0.1.568] - 2021-09-08
### Added
- Hotfix for Button text with relative position

## [0.1.567] - 2021-09-07
## [0.1.566] - 2021-09-07
### Added
- Hotfix for Accordion initialised collapsed still having content tab-able

## [0.1.565] - 2021-09-07
### Added
- Added fix for Accordion heading only displaying sccoped slot

## [0.1.564] - 2021-09-03
### Added
- Adding error handler for text input

## [0.1.563] - 2021-09-01
### Added
- Adding stepped dragging functionality to the Slider

## [0.1.562] - 2021-09-01
### Added
- Fix for regression of missing padding around input

## [0.1.561] - 2021-09-01
### Added
- Fix for Accordion overflow being visible at start of expanding as oppose to the end

 ## [0.1.560] - 2021-08-31
### Added
- Added Dialog component
- Added Card component
- Added Slider component
- Misc enhancements addes to Accordion, AutoComplete, InputText

 ## [0.1.559] - 2021-08-13
### Added
- Add Autocomplete Component

## [0.1.558] - 2021-08-13
### Added
- Bugfix for button loader alignment

## [0.1.557] - 2021-08-12
### Added
- Adding fix for Icon color
- Fix for button text alignment

## [0.1.556] - 2021-08-12
### Added
- Adding more icons

## [0.1.555] - 2021-08-09
### Added
- Add Text Input component

## [0.1.554] - 2021-07-29
### Added
- Update Icon size property use in Accordion

## [0.1.553] - 2021-07-29
### Added
- Add full icon set from design
- Add more sizes

## [0.1.552] - 2021-07-27
### Added
- Expose Icon component for integration

## [0.1.551] - 2021-07-15
### Added
- Migrated Accordion to use optional v-model

## [0.1.550] - 2021-07-15
## [0.1.549] - 2021-07-15
## [0.1.548] - 2021-07-15
## [0.1.547] - 2021-07-15
### Added
- Fix regression issues with colours & npm publish noob mistakes

## [0.1.546] - 2021-07-15
### Added
- Fixes for Accordion not rendering collapsed content
- Switch animation to CSS transitions

## [0.1.545] - 2021-07-15
### Added
- Removing Accordion component after testing integration

## [0.1.544] - 2021-07-15
### Added
- Added Accordion component to test integration

## [0.1.543] - 2021-07-02
### Added
- Add skip links component

## [0.1.542] - 2021-07-01
### Added
- Add prefix to tailwind classes
- Reverse changelog ordering
- rm presets field in tailwind

## [0.1.54] - 2021-07-01
### Added
- Added options API to PButton.
- Added computed states to PButton.

### Removed
- Removed composition API > definComponent from PButton
  - This was causing issues when using `npm link` to develop the application inside the onboarding application.

## [0.1.53] - 2021-06-29
### Added
- CTAButton name changed to PButton
- Fix css in stories
- Add fonts to the project.
- Add ripple effect to button.
- Add outlined version of PButton


## [0.1.52] - 2021-06-22
### Added
- CTAButton component
- Vue2 defineComponent compatibility.
- Start using "changelog"

### Changed
- Update README.md file

### Removed
- Vue3 compatibility.
