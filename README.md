# Angular CLI Static

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-next.5.

## Development server

1. Run `npm start` for a dev server
1. Navigate to `http://localhost:4200/` 

The app will automatically reload if you change any of the source files.

## Build

- Run `npm run build` to build the project
- Run `npm run build:prod` flag for a production build

The build artifacts will be stored in the `dist/` directory.

## Key Configuration Steps

1. Create a workspace without an app:
```shell script
ng new --create-application=false angular-cli-static
```
1. Create a minimal app:
```shell script
ng g app --style=scss --minimal=true --routing=false --skip-tests=true static-html
```
1. Comment out `zone.js` import in [polyfills.ts](polyfills.ts)
1. In [angular.json](angular.json) clear out `"fileReplacements": []`
1. Remove `app/`, `environments/`
1. Remove most of the Angular dependencies from [package.json](package.json)'s `dependencies`
    other than `@angular/core`, `@angular/compiler`, and `rxjs`
1. Remove `codelyzer` and `@angular/language-service` from [package.json](package.json)'s `devDependencies`
1. Remove `codelyzer` from `rulesDirectory` and remove all of the Codelyzer rules from
    the workspace [tslint.json](tslint.json)
1. Remove `directive-selector` and `component-selector` rules
    from your app's [tslint.json](projects/static-html/tslint.json)
