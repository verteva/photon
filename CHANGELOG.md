# [0.19.0](https://github.com/verteva/photon/compare/v0.18.0...v0.19.0) (2023-08-08)


### Bug Fixes

* accordion header unit tests and snapshot ([9ac2644](https://github.com/verteva/photon/commit/9ac2644b3d017b11dee37f9b8eeaeb591a18e13b))
* accordion header uses fixed width fa icons and improved height handling with flex ([d624fbe](https://github.com/verteva/photon/commit/d624fbe5528b53f94405ddd2a96022bd8623f970))
* accordion improvement for mutation observer height and slot default handling ([bb4fd6e](https://github.com/verteva/photon/commit/bb4fd6e48c711d0398422cebe5c1499389b92bd9))
* accordion now has a mutation observer to update the fixed height of the header when updated ([e76c2de](https://github.com/verteva/photon/commit/e76c2de9b7ea53d2ae48aaa25c6d551ea1db5b99))
* accordion prop clean up ([28135f0](https://github.com/verteva/photon/commit/28135f0a5a3cc5701339ecf1de7e6913b176dc43))
* accordion tweak watch text content changes only. custom update height fn ([a403532](https://github.com/verteva/photon/commit/a40353228e027804428d79f356de8f78aa4a7f1b))
* autocomplete select cleanup and icon color tweaks ([e358b0a](https://github.com/verteva/photon/commit/e358b0a07310814669068e0dbcd424902ea86ae1))
* brand gradient text unit test ([78ec8a3](https://github.com/verteva/photon/commit/78ec8a33efd1c004a9ea5e8053da184c48aa7c87))
* button focus state for link buttons and cleanup default focus outline ([ddf7687](https://github.com/verteva/photon/commit/ddf76871ba7969fa368160e3081cd810ada632fd))
* button naming to p2button for consistency with other p2 components ([92ec3dc](https://github.com/verteva/photon/commit/92ec3dcd8d72fde2b1e8716872061a3f6cf36fdd))
* button reference fa mixin and update unit tests ([3553b7d](https://github.com/verteva/photon/commit/3553b7d83ed866264d69674ec1734cd7ad925f33))
* button updated to use global scss and consistent prop name ([72c3899](https://github.com/verteva/photon/commit/72c3899831e19807324cf32211ec52b722220893))
* card remove overflow hidden to fix issues with dropdowns being cut off (eg: input phone) ([d529b52](https://github.com/verteva/photon/commit/d529b523945397e4ceb4b6eecf0fce014bd2d92f))
* card unit test updated because light is now default ([6184e6f](https://github.com/verteva/photon/commit/6184e6fb73d93efb9209f14f84a31b2e5c716b77))
* checkbox token name and checkbox group item size to provide bottom margin ([fa0d4a3](https://github.com/verteva/photon/commit/fa0d4a30777604218760e05360d857c9eeae0459))
* content card uses and passes size, and improved active & focus styles and event handling ([5d0b954](https://github.com/verteva/photon/commit/5d0b95405e3524003f8e957b1a7b9d46b42afc6c))
* dialog headline margin top zero and close button border radius tweak ([cbed889](https://github.com/verteva/photon/commit/cbed889fd1de7aeefea78dba6c01da48459464e9))
* dialog supports passing headline element and improved spacing ([fbda6aa](https://github.com/verteva/photon/commit/fbda6aa2ced87570cb1b23bc97a05ea70951a5eb))
* form control unit tests ([9a93eec](https://github.com/verteva/photon/commit/9a93eec0e31ea6e5ffbf11448a2fa053940c4c73))
* improved checkbox focus, accessibility and chenpm linknpm cked handling ([5224e99](https://github.com/verteva/photon/commit/5224e994bc37d39a884438bdf4a45598cfaa0122))
* indicator unit test tweak ([2e96b48](https://github.com/verteva/photon/commit/2e96b48439ec2cf14f51511c6ecf5d6b5738e35f))
* input number unit tests ([d4e68da](https://github.com/verteva/photon/commit/d4e68dae2e602b74bb407a35b645bbe5a3bde03b))
* input phone toggle icon color ([7236eeb](https://github.com/verteva/photon/commit/7236eeb455196265dffad7e194a806645bd1bc09))
* input phone was inheriting incorrect styles from v1 component ([c132c4f](https://github.com/verteva/photon/commit/c132c4f020773d94c72d1ea65b3448f4eee820e5))
* input radio button group unit tests ([f4141af](https://github.com/verteva/photon/commit/f4141af15757acb34965eb08b0e346b14c2613c7))
* input text placeholder styles ([2ab6cd2](https://github.com/verteva/photon/commit/2ab6cd24d75a2f0f83688fc683cd5a529b515f2c))
* inputmessage unit tests ([439990a](https://github.com/verteva/photon/commit/439990a2d7a6992248320d3904b5aaa2361ae145))
* inputradiobuttongroup was missing name prop to pass to children ([dbcc818](https://github.com/verteva/photon/commit/dbcc818e4d2ed58f9fe1f6bba95293765e218572))
* label now correctly hides elements that are empty ([72c229f](https://github.com/verteva/photon/commit/72c229f93c8bc1496c17be041e37ade0ddea9f03))
* label supports default slot ([a0e0022](https://github.com/verteva/photon/commit/a0e002280986eff748d4958125389e1eff49a93e))
* label unit test ([774bc73](https://github.com/verteva/photon/commit/774bc7303118159cefa5927a45d6fb60a5da5e50))
* link component was using same name as button ([6d7bdfd](https://github.com/verteva/photon/commit/6d7bdfdeda20eec2403f915f19d4ff62796b9f62))
* message unit tests ([cf1ed03](https://github.com/verteva/photon/commit/cf1ed033d2c5f177bba56cebd784b4a6ccb804d9))
* number input unit tests ([c2b152b](https://github.com/verteva/photon/commit/c2b152bfe717447da6033339087fbf6dd3c43ef1))
* p2 message anchor links inherit color ([0a76af5](https://github.com/verteva/photon/commit/0a76af5c9bf26e8899cc41b30a4c08811e15f4df))
* remove horrible focus dotted line style in accordion header ([0608a18](https://github.com/verteva/photon/commit/0608a18aa368f6944501435f223bd5115e01ed5f))
* replace old brand class with generic class name for ease of use ([8773348](https://github.com/verteva/photon/commit/877334824432f2c5f0f3a25b873da6b41e307b72))
* update button to use new string function ([b878856](https://github.com/verteva/photon/commit/b878856fd457d8fac3b6c8b88a6df0fb74da2a5b))


### Features

* accordion now adds new classes for expanded and expanding for better styling ([19207a9](https://github.com/verteva/photon/commit/19207a98c0088e23928a38ed7444da64cc8f51dd))
* accordion uplift and remap including better card support ([253dddf](https://github.com/verteva/photon/commit/253dddf7fbf94e8312f4a0bc5518f8cec665b346))
* autocomplete and select component uplift and remap ([2608c90](https://github.com/verteva/photon/commit/2608c90bf84549657e2a5980d244a403958aec6e))
* backdrop uplift and cleanup ([8de2e64](https://github.com/verteva/photon/commit/8de2e6421da1be5b31d6f6818a22179c90d9c58c))
* button border width tokenised and defaulted to 2px for all variants ([e532ce5](https://github.com/verteva/photon/commit/e532ce59c650914861c54ceffdde405f27d9d2f8))
* button component uplift ([f953480](https://github.com/verteva/photon/commit/f953480f46f2013f38eaa195b201e077cf4899f9))
* button icons and layer prop and story cleanup ([29c6b4f](https://github.com/verteva/photon/commit/29c6b4f6bfc6cfd88d076ebc0dd9888ba32b6895))
* button now works with no label and only icon ([77ba342](https://github.com/verteva/photon/commit/77ba3421a7245d60c982d40a51cfce99e9c005e4))
* card now supports size none and improved styling ([0b18d09](https://github.com/verteva/photon/commit/0b18d091270643294b53c43b9ddb963e83ac3874))
* card uplift and remap ([e52aa3b](https://github.com/verteva/photon/commit/e52aa3b5152e30f3ddd707cdcbab15ec7f6da68c))
* checkbox variable remap ([21613c5](https://github.com/verteva/photon/commit/21613c55a2de13d4a2b2cabc172996f0d5927254))
* content card uplift and remap ([65e9b93](https://github.com/verteva/photon/commit/65e9b930eaebdb3d9a35191eea6800915ac4171a))
* contentcard uplift and remap and unit test snapshot updated ([d377f48](https://github.com/verteva/photon/commit/d377f489ca8fb6e7791f8939f6ab266187ced6aa))
* dialog uplift and remap ([4c5d711](https://github.com/verteva/photon/commit/4c5d7111ddfc1e1fe7bfdc40c0a26862065e292f))
* error message uplift and remap ([8d0aa37](https://github.com/verteva/photon/commit/8d0aa3750e037f32cbd014a37caf4f3d1d188010))
* export label and inputmessage for standalone use eg: addressfinder ([8633a42](https://github.com/verteva/photon/commit/8633a421f612fbd3ab4d99de38c1e234dee0483f))
* headline uplift and remap, and support dynamic heading element type ([76a9f54](https://github.com/verteva/photon/commit/76a9f5418d342605433b98470b5d5faeed626ea9))
* include chameleon branding in public ([d30be1c](https://github.com/verteva/photon/commit/d30be1cb01979c2903e6ce0997298fbae50b4232))
* include new inject css method from file in exported methods ([65c5669](https://github.com/verteva/photon/commit/65c5669e5227148efabfd2df7c21571fc6c173d6))
* infocard uplift and remap ([23d3d3b](https://github.com/verteva/photon/commit/23d3d3b9fe723f808268933dbec7146a50129ae5))
* input date supports multiple date formats ([9d4ea72](https://github.com/verteva/photon/commit/9d4ea72f3ca750782d74d3b3d2ed1bca4cae9297))
* input date uplift and remap, auto sibling focus, date format support ([52b2cdf](https://github.com/verteva/photon/commit/52b2cdf864fd78dc5713d84ed85751d4c4309fae))
* input message uplift and remap ([ee07d0b](https://github.com/verteva/photon/commit/ee07d0bbe3aa3a89d6144c797f22cf71bd2a7caa))
* input phone uplift and remap ([e56804f](https://github.com/verteva/photon/commit/e56804f8018a9ad7af88fa2130ff10b54ae644f5))
* input text uplift and remap, and add new keyup event ([5d0c3d2](https://github.com/verteva/photon/commit/5d0c3d288a0a69fe346fadda9f771bfd6e416e42))
* label uplift and remap ([f25011f](https://github.com/verteva/photon/commit/f25011f0cbd0393d78fbe376b4c443afda30380c))
* list & listitem component uplift ([2459d73](https://github.com/verteva/photon/commit/2459d733d272638011a928ef08850e3c34f6d2e3))
* message now supports hiding icon ([01ccc9d](https://github.com/verteva/photon/commit/01ccc9d8cd6c6748a94c5f5081588438bc0f3a34))
* message uplift and remap ([03d5fa6](https://github.com/verteva/photon/commit/03d5fa6efdf1686235c8c6ed0d89e0528e99a303))
* messenger now supports size prop and default slot for description ([672bf78](https://github.com/verteva/photon/commit/672bf7892c13b1c1282c414e66d1d7e9d65032df))
* number input uplift and remap ([21454b7](https://github.com/verteva/photon/commit/21454b702e799fbf2d63600af87e090d2c9f3dd5))
* progress circular uplift and remap, and unit tests ([3d1ee1c](https://github.com/verteva/photon/commit/3d1ee1cf5825509c2c4566070a7dea3b825e87ae))
* radio button uplift and remap ([0cf47ef](https://github.com/verteva/photon/commit/0cf47efe77933e296e1918d15bbd79cc20e764d7))
* skiplink uplift and remap ([bc724a9](https://github.com/verteva/photon/commit/bc724a9415356ce7855f251a2a357b28550ba2ac))
* toggle button uplift and remap ([f59d38d](https://github.com/verteva/photon/commit/f59d38d6674704de9e2f22dbd11fb4910f840776))
* uplift blockquote, disable in photon and migrate to ob native ([a67482e](https://github.com/verteva/photon/commit/a67482ed994a97e6a3683469a50debf86efcad5a))

## [0.17.2](https://github.com/verteva/photon/compare/v0.17.1...v0.17.2) (2023-06-02)


### Bug Fixes

* run lint and testing release ([a158e82](https://github.com/verteva/photon/commit/a158e828ddeacc3ae6e7a70efbf43f1fd033aefd))

## [0.17.1](https://github.com/verteva/photon/compare/v0.17.0...v0.17.1) (2023-05-17)


### Bug Fixes

* couple svg set to currentcolor instead of absolute hex value ([f703aec](https://github.com/verteva/photon/commit/f703aec795dd85fc16ce8c49f2f9357cf79ac52f))

# [0.17.0](https://github.com/verteva/photon/compare/v0.16.0...v0.17.0) (2023-03-13)


### Features

* add new icon ([7ed8373](https://github.com/verteva/photon/commit/7ed83733c1b22f4d4f2ceaaa733931ce7194910a))
* update svg to allow for color override ([12b45e6](https://github.com/verteva/photon/commit/12b45e6ad4f38f8fbd240fc2e6fc75ca2fa8deba))

# [0.16.0](https://github.com/verteva/photon/compare/v0.15.6...v0.16.0) (2023-03-10)


### Features

* new icons and bump version ([081ae89](https://github.com/verteva/photon/commit/081ae89b3ea06c4fb5da5d4020dc67e656540703))

## [0.15.6](https://github.com/verteva/photon/compare/v0.15.5...v0.15.6) (2023-03-02)


### Bug Fixes

* parser fix ([6c52af0](https://github.com/verteva/photon/commit/6c52af0af4c96f48bdd35c8020bd0e15746bd793))

## [0.15.5](https://github.com/verteva/photon/compare/v0.15.4...v0.15.5) (2023-02-23)


### Bug Fixes

* make adjustable for mobile screens ([ebd861a](https://github.com/verteva/photon/commit/ebd861ac14bb95007f5b84d89cf6c0cf2abaf005))

## [0.15.4](https://github.com/verteva/photon/compare/v0.15.3...v0.15.4) (2023-02-23)


### Bug Fixes

* allow accordion to force no horizontal padding per instance ([ea0f5b8](https://github.com/verteva/photon/commit/ea0f5b8c7a5f752a43033f367044619bf21919d8))
* don't duplicate prop declaration ([9d136bf](https://github.com/verteva/photon/commit/9d136bf257e3499456d14d3f9b0318ca5940dca9))

## [0.15.3](https://github.com/verteva/photon/compare/v0.15.2...v0.15.3) (2023-02-22)


### Bug Fixes

* passthrough returnObj ([7188bec](https://github.com/verteva/photon/commit/7188becc222a49210fe6cbc93e2eb90423f1e6c4))

## [0.15.2](https://github.com/verteva/photon/compare/v0.15.1...v0.15.2) (2023-02-14)


### Bug Fixes

* bind properties so we can override default country props ([16766f9](https://github.com/verteva/photon/commit/16766f9e375a608b881e9ba452f757be7e395d8e))

## [0.15.1](https://github.com/verteva/photon/compare/v0.15.0...v0.15.1) (2023-02-14)


### Bug Fixes

* attempted bug fix for countries not updating ([5e8c63f](https://github.com/verteva/photon/commit/5e8c63f694ef5fb36eed924a3855357b76398406))

# [0.15.0](https://github.com/verteva/photon/compare/v0.14.4...v0.15.0) (2023-02-01)


### Bug Fixes

* prevent non numbers being typed inputText, inputDate ([94ab8cc](https://github.com/verteva/photon/commit/94ab8cc3d784494584a9828e5438d0d3f52326b3))


### Features

* added on blur handlers for input date ([131ccfb](https://github.com/verteva/photon/commit/131ccfbc2cd650f93cf856b5b5c26e01cd690c37))

## [0.14.4](https://github.com/verteva/photon/compare/v0.14.3...v0.14.4) (2023-01-27)


### Bug Fixes

* overflow elpisis for long text ([9642319](https://github.com/verteva/photon/commit/9642319718ad00cbe54479138a35520cf7466cfc))

## [0.14.3](https://github.com/verteva/photon/compare/v0.14.2...v0.14.3) (2023-01-24)


### Bug Fixes

* color parser update to allow for whitespaces ([29886c5](https://github.com/verteva/photon/commit/29886c509cb8794a04bf548bf637da94801b511a))

## [0.14.2](https://github.com/verteva/photon/compare/v0.14.1...v0.14.2) (2023-01-20)


### Bug Fixes

* heading 1 downgrade ([bd139a3](https://github.com/verteva/photon/commit/bd139a3d54697b5f99c60ee5b4df509f046abcd3))
* update word break for dialogs with long words ([8ca4c28](https://github.com/verteva/photon/commit/8ca4c2889b989fc1b77f4a8f663c364bea896402))

## [0.14.1](https://github.com/verteva/photon/compare/v0.14.0...v0.14.1) (2022-12-15)


### Bug Fixes

* update radio button checked background ([dc8abdd](https://github.com/verteva/photon/commit/dc8abdd2c497d4e61ec5b71a71eb87846191e352))

# [0.14.0](https://github.com/verteva/photon/compare/v0.13.1...v0.14.0) (2022-12-13)


### Bug Fixes

* initinput support correct types like number ([0bb07fe](https://github.com/verteva/photon/commit/0bb07fe59b90ecd3771eb41e6688ec8b4b050148))
* new branding vars ([3cec10e](https://github.com/verteva/photon/commit/3cec10eab4ef8a6bbdd8ba611040a671e7d5d96d))
* selectedBy prop not working correctly ([4819d7b](https://github.com/verteva/photon/commit/4819d7b348e992eb7ca892481da7de7d87f33168))
* update cardStyle ([c3917c1](https://github.com/verteva/photon/commit/c3917c1abbce5fff1e939d2f68af8d3e48e49e6b))
* update figure type file ([724981e](https://github.com/verteva/photon/commit/724981ea5cb83681f5b0ede7aee93e74f2527704))
* update fonts ([f666aea](https://github.com/verteva/photon/commit/f666aeadc46a152256fbfa55bfc344679e30d52f))
* update spec ref ([e927806](https://github.com/verteva/photon/commit/e927806b218f9572d5e5bc3572bf79d655d006b7))
* update title slot ([4491cbd](https://github.com/verteva/photon/commit/4491cbda6787dd2f241a93a24f19460d1ed85c37))
* update types ([f2bb614](https://github.com/verteva/photon/commit/f2bb61432a6c7f50224207f48f664595ea69a955))
* update unused FiguresData ([6ba1ed2](https://github.com/verteva/photon/commit/6ba1ed25f1d29663405cca9903afe6190a5d7ec3))


### Features

* add figure and figuresCard ([6042bdf](https://github.com/verteva/photon/commit/6042bdfc67961313b40e9f69306f54b2f3eae73e))

## [0.13.1](https://github.com/verteva/photon/compare/v0.13.0...v0.13.1) (2022-12-12)


### Bug Fixes

* removed slot rendering in button that caused <template> tags ([6329b2e](https://github.com/verteva/photon/commit/6329b2ecaeeb6b4ef593daaf027c0f770d773b95))

# [0.13.0](https://github.com/verteva/photon/compare/v0.12.0...v0.13.0) (2022-12-12)


### Bug Fixes

* move from rem to px ([73530d4](https://github.com/verteva/photon/commit/73530d408750ce9cafe8e7ee35c7e231031a6f62))
* unit tests ([7ae7539](https://github.com/verteva/photon/commit/7ae75398a39754ffb2ddd1f102337e6e29b5e01e))
* unit tests ([f35abf9](https://github.com/verteva/photon/commit/f35abf9ffceccf4122146c7b502fa35d51e6b83e))
* update medium from from using 'med -> md' ([b5e8edb](https://github.com/verteva/photon/commit/b5e8edbab6e2736a7ac8cd340bbadca28ec99264))
* wip CX-31 input text update ([73616cf](https://github.com/verteva/photon/commit/73616cf4b341280cd639585d98a03ab73c81cee3))


### Features

* skip link v2 ([1fa43c1](https://github.com/verteva/photon/commit/1fa43c10908924aede94960536f0d14b566322ed))
* skiplink v2 with adjustments ([cceef3e](https://github.com/verteva/photon/commit/cceef3e66a3e7965a7b29b23aad68d905cb0d67f))

# [0.12.0](https://github.com/verteva/photon/compare/v0.11.0...v0.12.0) (2022-12-05)


### Bug Fixes

* add info card photon v2 to export ob-web ([ca7fe0b](https://github.com/verteva/photon/commit/ca7fe0b4ae708b97a99f9300d8101cb0ffd1c23d))
* incorrect label variable props defined in atoms component ([dff030a](https://github.com/verteva/photon/commit/dff030ac8e448e38f7f5c5f3f9991746fd497ac4))
* re-arrange css values ([6004a42](https://github.com/verteva/photon/commit/6004a425aa3c0b3273c55530148acd3190d08250))
* update export names of list items ([d52af6b](https://github.com/verteva/photon/commit/d52af6b3d49b7c3cb7d21c1faf87d2d0d7ec2589))
* update indicator and position of dropdown ([a216f78](https://github.com/verteva/photon/commit/a216f786e7ec51cfdaf4359492e44dab32eb24eb))
* update input select found issues during integration ([0b61e01](https://github.com/verteva/photon/commit/0b61e018bbf964ea9a1a1b0ff27267b8e11ce8f9))


### Features

* brand gradient text photon v2 components ([e38ab89](https://github.com/verteva/photon/commit/e38ab8939e2f2f6bea404a6f698cf5d6f1d2eeaf))

# [0.11.0](https://github.com/verteva/photon/compare/v0.10.0...v0.11.0) (2022-11-30)


### Bug Fixes

* change to relative path ([b161593](https://github.com/verteva/photon/commit/b16159367dd8d6f7c5d2e8dcda9afec980e99c21))
* changed coverage provider ([e1ba3f3](https://github.com/verteva/photon/commit/e1ba3f3988725c45d3a6daa3ddf1bb9745101377))
* missing footer style and filter binding ([6e30ad1](https://github.com/verteva/photon/commit/6e30ad11e658ac1dfd129e0e7dac53dfc3a8cd48))
* move props outside ([c2d0aa3](https://github.com/verteva/photon/commit/c2d0aa3d4bb0443f829baade0cfba07a4102da3f))
* removed react deps ([6a235af](https://github.com/verteva/photon/commit/6a235af3e7dfc4d96715579b7d435f30cf7a7b3f))
* update name of component test ([3c35e1f](https://github.com/verteva/photon/commit/3c35e1f443a3468aaced291a4724f91330c1b954))


### Features

* accordion v2 component ([b9d9524](https://github.com/verteva/photon/commit/b9d9524fe43cc6b7e9c7d03d8d2391d61e87f2b4))
* content card v2 ([7d9712f](https://github.com/verteva/photon/commit/7d9712f4523f21026320e260d6fe186083d27522))
* info card photon version 2 component ([644cc17](https://github.com/verteva/photon/commit/644cc17b2a163c8216b11b7fbdb01f0cd9d3ca64))
* list items component photon V2 ([01ee3c1](https://github.com/verteva/photon/commit/01ee3c1536a61dc12896ad7811c2e3c1c23fe328))
* photon v2 input select integration ([a2c8f7b](https://github.com/verteva/photon/commit/a2c8f7b198d8ed88ed1a86dfa022fd962812adc5))

# [0.10.0](https://github.com/verteva/photon/compare/v0.9.0...v0.10.0) (2022-11-27)


### Bug Fixes

* additional props for autocomplete ([2c3f2c1](https://github.com/verteva/photon/commit/2c3f2c1f44e4a065545575fb0deab9d009617438))
* number input is now centered ([b54e50a](https://github.com/verteva/photon/commit/b54e50a88e7fdcc6b12baba7d260770953037952))
* prop import pr feedback ([4dbc2c7](https://github.com/verteva/photon/commit/4dbc2c7b49e2e969c7e0afa86c329a69206071d0))
* remove all ph classes ([cab9c53](https://github.com/verteva/photon/commit/cab9c53e4a4428789cfceec4046a8a41722a8a03))
* removed props export from backdrop ([dc699ba](https://github.com/verteva/photon/commit/dc699ba827767f032a2ac984cabd859d423a4769))
* update back-drop ref ([0147faa](https://github.com/verteva/photon/commit/0147faa8ac62f28fca495246dcad21e265032883))
* update dialog with backdrop and headline ([e6d6062](https://github.com/verteva/photon/commit/e6d60625179e40fc4e4f95f88a455f0a26b6e6a0))
* update dialog with cx-branding ([5467273](https://github.com/verteva/photon/commit/54672739a1f76d6619d66dd7862dc8ad05b5fd59))
* update spec and stories ([93b602b](https://github.com/verteva/photon/commit/93b602ba4d68debbe4020809f0f153d2f8a2f670))
* update spec of Dialog ([4283bb8](https://github.com/verteva/photon/commit/4283bb8f361e430bd88b58b2bd9b088fc827e78b))
* upgrade core-js from 3.25.5 to 3.26.0 ([7b47114](https://github.com/verteva/photon/commit/7b47114b1b62ba2f3b381974ef3e601a9ca4b867))


### Features

* add autocomplete component ([edb73ec](https://github.com/verteva/photon/commit/edb73ec580dc995871699ea5f006cf9d1cd8dff9))
* add autocomplete to photon v2 ([93e8023](https://github.com/verteva/photon/commit/93e8023d2f58bbe6330ed50ddec5d5ed44584e40))
* add P2Form to components v2 ([5b412c6](https://github.com/verteva/photon/commit/5b412c658116a15de3d78de61bc073f6cec1ed6f))
* breaking autocomplete components into sub stories ([7b9156f](https://github.com/verteva/photon/commit/7b9156f10f3fcdc135457ee55e0a7d07c7fe49e1))
* input phone component ([d4bf825](https://github.com/verteva/photon/commit/d4bf825c6bed850513d2ac5862fca2d8899a3c28))
* input phone v2 component ([261a6ee](https://github.com/verteva/photon/commit/261a6ee3c0a06374c264eca4bb63aae74e135864))

# [0.9.0](https://github.com/verteva/photon/compare/v0.8.1...v0.9.0) (2022-11-16)


### Bug Fixes

* button fixes ([686a395](https://github.com/verteva/photon/commit/686a395e0a5909830ab7faea2635cd7a9326e63e))


### Features

* early Dialog transition for button fixes ([94b3d4d](https://github.com/verteva/photon/commit/94b3d4d3d473360e3e885e3d6f60a1732590b16b))
* **PLAT-10:** input number update ([70e8a75](https://github.com/verteva/photon/commit/70e8a7523425ba2521b2587c2daf8bf3b40e1ed4))

## [0.8.1](https://github.com/verteva/photon/compare/v0.8.0...v0.8.1) (2022-11-15)


### Bug Fixes

* unable to select the radio button circle ([ad7efc7](https://github.com/verteva/photon/commit/ad7efc7b54827ffe74585ae715ae5dd073935ed2))

# [0.8.0](https://github.com/verteva/photon/compare/v0.7.0...v0.8.0) (2022-11-13)


### Bug Fixes

* input text component blur event added for ([77137bd](https://github.com/verteva/photon/commit/77137bd08f5bd8899c37c32b2bd7b62f1cda9419))


### Features

* add input date component ([fd3f6b2](https://github.com/verteva/photon/commit/fd3f6b20e6f886f7924de59b41e5611c5920a5d9))
* toggle component ([299078d](https://github.com/verteva/photon/commit/299078df77d90db32040c69b055078d2519d5582))

# [0.7.0](https://github.com/verteva/photon/compare/v0.6.1...v0.7.0) (2022-11-09)


### Bug Fixes

* select radio button full width ([cc272ad](https://github.com/verteva/photon/commit/cc272ad5d44de768e40a2f13b613a537ac00c7ed))


### Features

* add the MIT licence ([9b5db92](https://github.com/verteva/photon/commit/9b5db92f6b5cb78d9627bda8dc5cd2b6a0b3891f))
* input text component ([d636858](https://github.com/verteva/photon/commit/d6368587d88139ed8365844725f7d10fbaa13a66))
* message component v2 ([3b70a55](https://github.com/verteva/photon/commit/3b70a555fa807a033b8b62442564bf8befa422ab))
* toast component added ([eed4861](https://github.com/verteva/photon/commit/eed4861383738b336d85e61098c7b3087a209026))
* working in progress adding input text ([b0fbc66](https://github.com/verteva/photon/commit/b0fbc66d24422f074f1565be685e0e2d5e25e1bb))

## [0.6.1](https://github.com/verteva/photon/compare/v0.6.0...v0.6.1) (2022-11-04)


### Bug Fixes

* radio button missing name attribute binding ([a1400ff](https://github.com/verteva/photon/commit/a1400fffbbf48774d9d8b7741839edde8f19b678))

# [0.6.0](https://github.com/verteva/photon/compare/v0.5.1...v0.6.0) (2022-11-03)


### Bug Fixes

* can hide form control error. added input checkbox slot ([242d261](https://github.com/verteva/photon/commit/242d26137de2aa09bfddeae93d8e884baa2b3870))
* checkboxes fixed with styles ([9daf762](https://github.com/verteva/photon/commit/9daf76292cc1fc93b3ee633ecf7e10301039e490))


### Features

* add RadioButton and RadioButton components ([3c258d1](https://github.com/verteva/photon/commit/3c258d1af59e94e10599771e4c5d6e748ff9c104))
* adding css/replacing radio tailwind ([2916b1e](https://github.com/verteva/photon/commit/2916b1ecdf839bbd94457cdf187a6bd97ca11f0d))

## [0.5.1](https://github.com/verteva/photon/compare/v0.5.0...v0.5.1) (2022-10-31)


### Bug Fixes

* add focus to Dialog ([f2f8650](https://github.com/verteva/photon/commit/f2f8650e4470da87e011b04c7d2370d24fb23bae))
* node version in release pipeline ([7dc46ad](https://github.com/verteva/photon/commit/7dc46ad22b835250967364d1cc6f6a3b49d30e50))
* upgrade gsap from 3.11.1 to 3.11.2 ([148bf04](https://github.com/verteva/photon/commit/148bf0494cba7e2e2e606dbf80050427ba313dd5))
* upgrade gsap from 3.11.2 to 3.11.3 ([23b7ff8](https://github.com/verteva/photon/commit/23b7ff8c1bc2522d02ca9d171111c5801133bf46))

# [0.5.0](https://github.com/verteva/photon/compare/v0.4.2...v0.5.0) (2022-10-20)


### Bug Fixes

* added validators and improved type security ([8915916](https://github.com/verteva/photon/commit/89159166b6f3d6b3115c1d6118d5257f18ddb7ee))
* fixed all tests and updated folder structure for atomic components ([67f6a6a](https://github.com/verteva/photon/commit/67f6a6a13b419f120ae442bde25dd912214a769d))
* fixed imports for Molecules ([9131a6a](https://github.com/verteva/photon/commit/9131a6a25dc6f1db121de4f3f9a1cb60dd13a15c))
* style updates according to review ([e37ff20](https://github.com/verteva/photon/commit/e37ff20232cc847a06b2fe737c124857cb381136))
* updated color parser ([5e7146d](https://github.com/verteva/photon/commit/5e7146db614adbbe8c785328cd07e7667b0554d9))
* upgrade harp from 0.42.0 to 0.46.0 ([cd42795](https://github.com/verteva/photon/commit/cd427958f7f9667806d54c6992c865165c163079))
* upgrade vue-phone-number-input from 1.1.12 to 1.12.13 ([698102b](https://github.com/verteva/photon/commit/698102b3677794ebbc85957fdadd9bf601b2316a))


### Features

* added source file exclusion from parser ([17c560c](https://github.com/verteva/photon/commit/17c560c0e323d73e348a7f2c0d0cc18376a360a2))
* checkBox and checkboxgroup atoms added ([1ffa250](https://github.com/verteva/photon/commit/1ffa2502e22b8b224d1059b8001e32411b107903))
* checkbox fixed with new values ([0f65cda](https://github.com/verteva/photon/commit/0f65cdadb7daa4433f51b98008236cdfce54e69e))
* form atom for error message ([46c2824](https://github.com/verteva/photon/commit/46c282428f45ba745a2ae098c1b5e8f2215b8802))
* form atom for label ([dabdb01](https://github.com/verteva/photon/commit/dabdb010dd98ae31231d3daacf6d17ddbcd9bbd5))
* form control molecule ([633a98e](https://github.com/verteva/photon/commit/633a98e8ad4755dda23e06cce2a527c9919337eb))
* input message atom component ([dbe69c2](https://github.com/verteva/photon/commit/dbe69c2f4fa48749fba97c3e8b10b44dbcff2022))
* switching form controll to figma tokens ([f3f330e](https://github.com/verteva/photon/commit/f3f330ed91ddf6fd43d2417a73b3bd67e1866d88))

## [0.4.2](https://github.com/verteva/photon/compare/v0.4.1...v0.4.2) (2022-10-04)


### Bug Fixes

* added additional parser types and fixed shadow parser ([e45af43](https://github.com/verteva/photon/commit/e45af431979f5c5d16c4ffc1c2dac0018cd26a1a))
* added maths parser for numeric types ([021aa45](https://github.com/verteva/photon/commit/021aa4562f3d04a1af9227bf6521b9c60a93f770))
* updated math parser to return unparsable strings back ([8b0d85c](https://github.com/verteva/photon/commit/8b0d85c8bc9d762a9ba3816221d04d979925b602))
* upgrade core-js from 3.25.0 to 3.25.1 ([3fb1fbf](https://github.com/verteva/photon/commit/3fb1fbff616f2553df22bf9f3d6b252ce566b0df))
* upgrade harp from 0.41.0 to 0.42.0 ([b56c9c7](https://github.com/verteva/photon/commit/b56c9c757b23e1616962afdd919b5ba709724367))
* upgrade vue-phone-number-input from 1.1.10 to 1.1.12 ([d5c6bcb](https://github.com/verteva/photon/commit/d5c6bcb10e140709b65bc348d98fd1bc3b8bf2d9))

## [0.4.1](https://github.com/verteva/photon/compare/v0.4.0...v0.4.1) (2022-09-30)


### Bug Fixes

* added additional basic parser for unknown types as a catch all ([d979813](https://github.com/verteva/photon/commit/d979813a3b9824c03cd6e39a4f80355402e4ff78))

# [0.4.0](https://github.com/verteva/photon/compare/v0.3.2...v0.4.0) (2022-09-30)


### Bug Fixes

* upgrade @tailwindcss/postcss7-compat from 2.1.4 to 2.2.17 ([6e2f2dc](https://github.com/verteva/photon/commit/6e2f2dcb423876885656d74d8f45e0a3c9cdd85b))
* upgrade core-js from 3.14.0 to 3.25.0 ([adb4078](https://github.com/verteva/photon/commit/adb407814df1c4758bbdc0e1820fabbb6e0f3545))
* upgrade gsap from 3.11.0 to 3.11.1 ([a3a38d4](https://github.com/verteva/photon/commit/a3a38d4be74776119804c099ba42b50b5d4e82ce))
* upgrade gsap from 3.7.1 to 3.11.0 ([1505a6e](https://github.com/verteva/photon/commit/1505a6ed941808bc11b9cbb25ebe2025530e9c90))
* upgrade vue from 2.6.14 to 2.7.10 ([c982f74](https://github.com/verteva/photon/commit/c982f74ebbdbc4ddbf123584b12be58496a5ce29))
* upgrade vue-select from 3.12.2 to 3.20.0 ([c1610d5](https://github.com/verteva/photon/commit/c1610d5e3abc15f39fa949d9752eee51135d44c2))


### Features

* added build scripts for automation ([0c2b5d5](https://github.com/verteva/photon/commit/0c2b5d56c821d2d7b8b30f7c708cb8639bb7bb08))
* chameleon loading ([0035cd9](https://github.com/verteva/photon/commit/0035cd976f9d29c5dda252b800ef20c36f60e094))

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
