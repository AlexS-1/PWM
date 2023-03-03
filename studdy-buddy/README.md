# StuddyBuddy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

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
2. for any link include `href="LINK_NAME" routerLink="NAME_OF_COMPONENT" routerLinkActive="active" ariaCurrentWhenActive="page"` tags
3. In app-routing.module.ts add a path statement in the static route array: { path: `PATH`, component:COMPONENT_NAMEComponent}

A `PATH` consists of `SOURCE_COMPONENT/DESTINATION_COMPONENT`
e.g., to link from component "foo" to component "baa" add { path: 'foo/baa', component:BaaComponent} to the path array

# SPECULATION: 
I don't know what happens with nested components e.g., if "baa" is nested in "baz". It may need a path entry like { path: 'foo/baz/baa', component:BaaComponent}
