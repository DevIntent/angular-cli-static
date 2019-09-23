# Angular CLI Static

This experimental project was generated with [Angular CLI](https://github.com/angular/angular-cli)
version `9.0.0-next.5`.

## Development server

1. Run `npm start` for a dev server
1. Navigate to `http://localhost:4200/` 

The app will automatically reload if you change any of the source files.

## Build

- Run `npm run build` to build the project
- Run `npm run build:prod` flag for a production build

The build artifacts will be stored in the `dist/` directory.

## Deploy

1. Change [.firebaserc](.firebaserc) to point to your Firebase Hosting project
1. Ensure that you are logged in to Firebase: `npm run login`
1. Run `npm run deploy`

## Key Configuration Steps

1. Create a workspace without an app:
```shell script
ng new --create-application=false angular-cli-static
```
1. Create a minimal app:
```shell script
ng g app --style=scss --minimal=true --routing=false --skip-tests=true static-html
```
1. Comment out `zone.js` import in [polyfills.ts](projects/static-html/src/polyfills.ts)
1. In [angular.json](angular.json) clear out `"fileReplacements": []`
1. Remove `app/`, `environments/`
1. Remove the following Angular dependencies from [package.json](package.json)'s `dependencies`:
    - `@angular/animations`
    - `@angular/forms`
1. Remove the following dependencies from [package.json](package.json)'s `devDependencies`:
    - `codelyzer`
    - `@angular/language-service`
1. Remove `codelyzer` from `rulesDirectory` and remove all of the Codelyzer rules from
    the workspace [tslint.json](tslint.json)
1. Remove `directive-selector` and `component-selector` rules
    from your app's [tslint.json](projects/static-html/tslint.json)
1. Enable Deployment to Firebase
```shell script
ng add @angular/fire
```
1. Update your [firebase.json](firebase.json) to work with a static site rather than a SPA
```json
  "rewrites": [
    {
      "source": "/",
      "destination": "/index.html"
    }
  ]
```
1. Add a [404.html](projects/static-html/src/404.html) and [404.css](projects/static-html/src/404.css)
1. Update your project's assets list in [angular.json](angular.json) to include the new files
```json
    "assets": [
      "projects/static-html/src/favicon.ico",
      "projects/static-html/src/404.html",
      "projects/static-html/src/404.css",
      "projects/static-html/src/assets"
    ],
```
