# StuddyBuddy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0. 

To make it work, install the rquired packes using: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### How to link form components to other components ###

1. Make sure to have <router-outlet></router-outlet> in the component that should change the visible content (here: our app.component.html)
2. for any link include `href="LINK_NAME" routerLink="/NAME_OF_COMPONENT" routerLinkActive="active" ariaCurrentWhenActive="page"` tags
3. In app-routing.module.ts add a path statement in the static route array: { path: `PATH`, component:COMPONENT_NAMEComponent}

A `PATH` consists of `/DESTINATION_COMPONENT` or `SOURCE_COMPONENT/DESTINATION_COMPONENT` for sub-pages
e.g., to link from component "foo" to component "baa" add `{ path: '/baa', component:BaaComponent}` or `{ path: 'foo/baa', component:BaaComponent}´ (for subpages) to the path array

If "baa" is nested in "baz". It needs a path entry like `{ path: 'foo/baz/baa', component:BaaComponent}`

### How to add Firebase to Project ###

1. Make sure to have Firebase installed: `npm install firebase`
2. Replace in `node_modules/@angular/fire/compat/firestore/interfaces.d.ts` the following lines to include `extends firebase.firestore.DocumentData` instead of 
- `extends firebase.firestore.DocumentSnapshot` in lines 13
- `extends firebase.firestore.QueryDocumentSnapshot` in lines 23
- `extends firebase.firestore.QuerySnapshot` in line 26
- `extends firebase.firestore.DocumentChange` in line 29