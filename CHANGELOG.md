# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.52] - 2021-06-22
### Added
- CTAButton component
- Vue2 defineComponent compatibility.
- Start using "changelog"

### Changed
- Update README.md file

### Removed
- Vue3 compatibility.

## [0.1.53] - 2021-06-29
### Added
- CTAButton name changed to PButton
- Fix css in stories
- Add fonts to the project.
- Add ripple effect to button.
- Add outlined version of PButton

## [0.1.54] - 2021-07-01
### Added
- Added options API to PButton.
- Added computed states to PButton.

### Removed
- Removed composition API > definComponent from PButton
  - This was causing issues when using `npm link` to develop the application inside the onboarding application.
