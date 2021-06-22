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

4. Run the publish command
```
npm publish
```